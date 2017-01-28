var gulp = require('gulp');
var ts = require('gulp-typescript');
var print = require('gulp-print');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var colors = gutil.colors;
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var run = require('gulp-run');
var ngc = require('gulp-ngc');

var compilation = {};

compilation.compileTypescript = function (tsconfigFile, destDir) {
    gutil.log("Compiling typescript " + colors.magenta(tsconfigFile));
    var tsProject = ts.createProject(tsconfigFile);
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest(destDir))
        .pipe(print())
        .on('end', () => gutil.log(gutil.colors.gray('[' + tsconfigFile + '] --> ') +
            "compilation of typescript done (dest dir "
            + gutil.colors.magenta(destDir) + ')'));
}

compilation.compileSass = function(sourceDir, targetDir) {
    gutil.log("Compiling SCSS in " + colors.magenta(sourceDir));
    return gulp.src(sourceDir + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(targetDir || sourceDir))
        .pipe(print())
        .on('end', () => gutil.log("Compilation of SCSS done."));
}

compilation.compileAngularTemplates = function(configFilePath) {
    gutil.log("Compiling templates with " + gutil.colors.magenta(configFilePath));
    return ngc(configFilePath)
        .on('end', () => gutil.log(
            gutil.colors.gray('[' + configFilePath + '] --> ') +
            "compilation of templates done."));
}


module.exports = compilation;
