var nodePath = require('path');

var conf = {};
var root = nodePath.resolve(__dirname + "/..") + "/";

var APP_DIR_NAME = "app";
conf.APP_DIR = root + APP_DIR_NAME;
conf.TEMP_DIR = root + "temp";
conf.APP_PROD = root + "temp/app-prod-compiled";
conf.APP_ROLLUP_ENTRY = conf.APP_PROD + "/" + APP_DIR_NAME + "/main-aot.js";
conf.ROLLUP_CONFIG = root + "build-tools/rollup-config.js";
conf.RXJS_TO_ES_TSCONFIG = root + "build-tools/tsconfig.rxjs-to-es6.json";
conf.RXJS_TO_ES_DIR = conf.TEMP_DIR + "/rxjs-es";
conf.NGC_TSCONFIG = root + "tsconfig.ngc.json";
conf.PROD_TSCONFIG = root + "tsconfig.prod.json";
conf.TSCONFIG = root + "tsconfig.json";

conf.DIST_DEV_DIR = root + "./dist-dev";
conf.DIST_DIR = root + "./dist";
conf.AOT_DIR = root + "app-aot";
conf.ASSETS_DIR = root + "assets"

module.exports = conf;
