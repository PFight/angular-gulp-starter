var gulp = require('gulp');
var vars = require('./variables.js');
var api = require('angular-gulp-starter-api');

gulp.task("build-dev", function(){
    return api.sync(
        () => api.dev.prepareImportModules(vars),
        () => api.async(
            () => api.dev.compileScss(vars),
            () => api.dev.compileTypescript(vars)
        ),
        () => api.dev.injectScripts(vars)
    );
});

gulp.task('clean-dev', function () {
    return api.dev.clean(vars);
});

gulp.task("build-prod", function(){
    return api.sync(
        () => api.prod.clean(vars),
        () => api.async(
            () => api.prod.makeCommonBundle(vars),
            () => api.prod.copyAssetsToDist(vars),
            () => api.sync(                
                () => api.prod.compileScss(vars),
                () => api.prod.processAngularTemplates(vars),
                () => api.prod.compileTypescript(vars),
                () => api.prod.makeAppBundle(vars)
            )
        ),
        () => api.prod.processIndexHtml(vars)
    );
});

gulp.task('clean-prod', function () {
    return api.prod.clean(vars);
});

gulp.task('clean', function(callback) {
  runSequence('clean-prod', 'clean-dev', callback);
});

gulp.task('serve-dev', function (callback) {
    api.devServer.run();
});

gulp.task('serve-prod', function (callback) {
    api.prodServer.run();
});
