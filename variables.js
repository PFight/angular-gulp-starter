var nodePath = require('path');
var api = require('angular-gulp-starter-api');

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

conf.LIBS_DIR = nodePath.join(root, "external-libs");

conf.INJECT_SCRIPTS_DEV = [
    api.pathTools.resolvePackagePath("zone.js"),
    api.pathTools.resolvePackagePath("reflect-metadata"),
    api.pathTools.resolvePackagePath("es6-shim"),
    api.pathTools.resolvePackagePath("tslib"),
    "node_modules/systemjs/dist/system.js",
    "systemjs-config.js"
];

conf.IMPORT_MODULES = [
    api.libs.rxjs.getImportModules(),
    "@angular/common",
    "@angular/core",
    "@angular/http",
    "@angular/compiler",
    "@angular/platform-browser-dynamic",
    "@angular/platform-browser",
    "@angular/router",
    "@angular/forms"
];
conf.IMPORT_MODULES_ENTRY_NAME = "imports.js";

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
conf.COMMON_BUNDLE_SCRIPTS = [
    api.prod.moduleFixScriptPath,
    api.pathTools.resolvePackagePath("zone.js"),
    api.pathTools.resolvePackagePath("reflect-metadata"),
    api.pathTools.resolvePackagePath("es6-shim"),
    api.pathTools.resolvePackagePath("tslib")
];
conf.INJECT_SCRIPTS_PROD = [
    nodePath.join(conf.DIST_DIR, conf.APP_DIR_NAME, conf.COMMON_BUNDLE_NAME),
    nodePath.join(conf.DIST_DIR, conf.APP_DIR_NAME, conf.APP_BUNDLE_NAME)    
];


module.exports = conf;
