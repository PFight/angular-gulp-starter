var nodePath = require('path');

var conf = {};

// =======================================================
// Common variables
//
var root = nodePath.resolve(__dirname) + "/";

conf.ROOT = root;
conf.APP_DIR_NAME = "app";
conf.APP_DIR = nodePath.join(root, conf.APP_DIR_NAME);
conf.TEMP_DIR = nodePath.join(root, "temp");
conf.ASSETS_DIR = nodePath.join(root, "app/global-assets");
conf.INDEX_HTML = nodePath.join(root, "index.html");

// =======================================================
// Development build variables
// 

conf.TSCONFIG = nodePath.join(root, "tsconfig.json");

// =======================================================
// Production build variables
// 

// Ahead of time compilation
conf.NGC_TSCONFIG = nodePath.join(root, "tsconfig.ngc.json");
conf.AOT_DIR = nodePath.join(root, "app-aot");

// Release compilation
conf.APP_PROD = nodePath.join(root, "temp/app-prod-compiled");
conf.PROD_TSCONFIG = nodePath.join(root, "tsconfig.prod.json");

// Rollup
conf.APP_ROLLUP_ENTRY = nodePath.join(conf.APP_PROD, conf.APP_DIR_NAME, "main-aot.js");
conf.ROLLUP_CONFIG = nodePath.join(root, "rollup-config.js");

// Publish
conf.DIST_DIR = nodePath.join(root, "dist");
conf.APP_BUNDLE_NAME = "app.min.js";
conf.COMMON_BUNDLE_NAME = "common.min.js";

module.exports = conf;
