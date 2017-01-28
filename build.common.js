var es = require('event-stream');
var gutil = require('gulp-util');
var fs = require("fs");

var conf = require('./build-tools/variables.js');
var compilation = require('./build-tools/build-scripts/compilation.js');

var build = {};

build.rxjsToEs = function (context) {
    if (!fs.existsSync(conf.RXJS_TO_ES_DIR)) {
        return compilation.compileTypescript(
            conf.RXJS_TO_ES_TSCONFIG, conf.RXJS_TO_ES_DIR);
    } else {
        gutil.log(gutil.colors.magenta(conf.RXJS_TO_ES_DIR) + " already exists, skipping...");
        return es.merge();
    }
}

module.exports = build;
