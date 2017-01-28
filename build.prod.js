var gulp = require('gulp');
var gutil = require('gulp-util');
var colors = gutil.colors;
var nodePath = require('path');
var streamqueue = require('streamqueue');
var es = require('event-stream');
var del = require("del");
var vinylPaths = require('vinyl-paths');
var replace = require('gulp-replace');
var print = require('gulp-print');


var conf = require('./build-tools/variables.js');
var bundling = require('./build-tools/build-scripts/bundling.js');
var pathTools = require('./build-tools/build-scripts/path-tools.js');
var compilation = require('./build-tools/build-scripts/compilation.js');
var common = require('./build.common.js');

var build = {};

build.compile = function(context) {
    var compileProdSaas = function() {
        return compilation.compileSass(conf.APP_DIR);
    };
    var compileProdTemplates = function() {
        return compilation.compileAngularTemplates(conf.NGC_TSCONFIG);
    }
    var compileProdTypescript = function() {
        return compilation.compileTypescript(conf.PROD_TSCONFIG, conf.APP_PROD);
    }
    var rxjsToEs = function () {
        return 
    }

    return streamqueue({ objectMode: true },
        common.rxjsToEs(context),
        compileProdSaas,
        compileProdTemplates,
        compileProdTypescript
    );
};


build.commonBundle = function (context) {
    var packages = [
        pathTools.resolvePackagePath("zone.js"),
        pathTools.resolvePackagePath("reflect-metadata"),
        pathTools.resolvePackagePath("es6-shim"),
        pathTools.resolvePackagePath("tslib")
    ];

    var bundle = bundling.concatBundle("common.min.js", packages,
        { destDir: context.destDir, uglify: true, cache: true });
    return bundle.stream;
};

build.appBundle = function(context){
    let mainEntry = nodePath.join(conf.APP_ROLLUP_ENTRY);
    var bundle = bundling.rollupFromEntry("app.min.js", mainEntry, { format: "iife" },
        { destDir: context.destDir, uglify: true, cache: false });
    return bundle.stream;
};

build.assets = function(context) {
    return gulp.src( "./assets/**/*.*")
      .pipe(gulp.dest(nodePath.join(context.destDir, "assets")));
}

build.bundle = function(context) {
    return es.merge(
        build.commonBundle(context),
        build.appBundle(context),
        build.assets(context)
    );
}

build.processIndexHtml = function (context) {
    return gulp.src(context.indexHtmlPath)
        .pipe(replace('<!-- prod --', '<!-- prod -->'))
        .pipe(replace('-- end-prod -->', '<!-- end-prod -->'))
        .pipe(replace('<!-- dev -->', '<!-- dev --'))
        .pipe(replace('<!-- end-dev -->', '-- end-dev -->'))
        .pipe(gulp.dest(context.destDir))
        .pipe(print(file => { gutil.log('Processed --> ' + file) }));
}

build.build = function(context) {
    return streamqueue({ objectMode: true },
        () => build.clean(context),
        () => build.compile(context),
        () => build.bundle(context),
        () => build.processIndexHtml(context)
    );
}

build.clean = function (context) {
    gutil.log("Cleaning...");
    return gulp.src([
        conf.APP_DIR + "/**/*.js",
        conf.APP_DIR + '/**/*.js.map',
        conf.APP_DIR + '/**/*.metadata.json',
        conf.DIST_DIR,
        conf.AOT_DIR,
        context.destDir
    ])
    .pipe(vinylPaths(del))
    .on('end', () => gutil.log("Cleaning done."));
};

module.exports = build;
