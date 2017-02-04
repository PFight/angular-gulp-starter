var streamqueue = require('streamqueue')
var es = require('event-stream');
var del = require('del');
var fs = require("fs");
var path = require('path');
var resolve = require('browser-resolve');
var gutil = require('gulp-util');

var conf = require('./build-tools/variables.js');
var bundling = require('./build-tools/build-scripts/bundling.js');
var pathTools = require('./build-tools/build-scripts/path-tools.js');
var compilation = require('./build-tools/build-scripts/compilation.js');
var common = require('./build.common.js');

var build = {};

build.rxjsBundle = function (context) {
    var rxjsEsDir = pathTools.normalizePathSeparators(conf.RXJS_TO_ES_DIR);

    // Make list of all rxjs modules
    var packagesMap = {};
    pathTools.walkFilesSync(rxjsEsDir, filePath => {
        // Skip MicsJSDoc due to errors
        if (filePath.indexOf('Rx.js') < 0 && filePath.indexOf('MiscJSDoc.js') < 0) {
            // Get package name, removing folder path, extension and replacing \ to /
            let packageName = pathTools.normalizePathSeparators(filePath)
                .replace(rxjsEsDir, 'rxjs').replace('.js', '');
            packagesMap[packageName] = packageName;
        }
    });

    // Bundle it to the one file
    var bundleName = "rxjs.js";
    var bundle = bundling.rollupPackages(bundleName, packagesMap, { format: "cjs" },
        { destDir: context.destDir, cache: true, uglify: false });
    return bundle.stream;
}

build.bundle = function(context) {
    return streamqueue({ objectMode: true },
        () => common.rxjsToEs(context),
        () => build.rxjsBundle(context)
    );
}

build.compile = function(context) {
    return es.merge([
        compilation.compileTypescript(conf.TSCONFIG, conf.APP_DIR),
        compilation.compileSass(conf.APP_DIR)
    ]);
}

build.build = function(context) {
    return streamqueue({ objectMode: true },
        () => build.compile(context),
        () => build.bundle(context)
    );
}

build.clean = function(context) {
    return del([
        conf.APP_DIR + '/**/*.js',
        conf.APP_DIR + '/**/*.js.map',
        context.destDir,
    ]);
}

module.exports = build;
