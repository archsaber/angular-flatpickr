var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var insert = require('gulp-insert');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var packageJson = require('./package.json');

var distFolder = './dist/';
var src = (['ng-flatpickr']).map(function (val) {
    return 'src/' + val + '.js';
});


//just as indication
gulp.task('lint', function () {
    gulp.src(src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});


gulp.task('uglify', function () {
    gulp.src(src)
      .pipe(concat('ng-flatpickr.min.js'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(distFolder));
});

gulp.task('concat', function () {
    gulp.src(src, { base: '.' })
      .pipe(concat('ng-flatpickr.js'))
      .pipe(gulp.dest(distFolder));
});


gulp.task('clean', function (done) {
     del([distFolder + '/*'],{force:true}, done);
});

gulp.task('build',[ 'clean','lint','uglify', 'concat'], function () {

    var version = packageJson.version;
    var string = '/** \n* @version ' + version + '\n* @license MIT\n*/\n';

    gulp.src(distFolder + '*.js')
        .pipe(insert.prepend(string))
        .pipe(gulp.dest(distFolder));
});
