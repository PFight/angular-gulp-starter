System.config({
  defaultJSExtensions: true,
  paths: {
    "*": "node_modules/*",
    "app/*": "app/*",
    "dist-dev/*": "dist-dev/*",
    "@angular/common": "node_modules/@angular/common/bundles/common.umd",
    "@angular/core": "node_modules/@angular/core/bundles/core.umd",
    "@angular/http": "node_modules/@angular/http/bundles/http.umd",
    "@angular/compiler": "node_modules/@angular/compiler/bundles/compiler.umd",
    "@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd",
    "@angular/platform-browser": "node_modules/@angular/platform-browser/bundles/platform-browser.umd",
    "@angular/router": "node_modules/@angular/router/bundles/router.umd",
    "@angular/forms": "node_modules/@angular/forms/bundles/forms.umd"
  },
  packageConfigPaths: ["node_modules/*/package.json"]
});
