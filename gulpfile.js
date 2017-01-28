var gulp = require('gulp');
var runSequence = require('run-sequence');

var conf = require('./build-tools/variables.js');
var dev = require('./build.dev.js');
var prod = require('./build.prod.js');

var devContext = {
    destDir: conf.DIST_DEV_DIR,
    indexHtmlPath: "index.html"
};

var prodContext = {
    destDir: conf.DIST_DIR,
    indexHtmlPath: "index.html"
};

gulp.task("bundle-dev", function(){
    return dev.bundle(devContext);
});

gulp.task("compile-dev", function(){
    return dev.compile(devContext);
});

gulp.task("build-dev", function(){
    return dev.build(devContext);
});

gulp.task('clean-dev', function () {
    return dev.clean(devContext);
});

gulp.task("bundle-prod", function(){
    return prod.bundle(prodContext);
});

gulp.task("compile-prod", function(){
    return prod.compile(prodContext);
});

gulp.task("build-prod", function(){
    return prod.build(prodContext);
});

gulp.task('clean-prod', function () {
    return prod.clean(prodContext);
});

gulp.task('clean', function(callback) {
  runSequence('clean-prod', 'clean-dev', callback);
});
