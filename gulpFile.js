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
var conf = {
  directive: {
    src: './src/ng-flatpickr.js',
    name: 'ng-flatpickr.js',
    minName: 'ng-flatpickr.min.js'
  },
  component: {
    src: './src/ng-flatpickr-comp.js',
    name: 'ng-flatpickr-comp.js',
    minName: 'ng-flatpickr-comp.min.js'
  }
};

function setupLint(config) {
  return function() {
    return gulp.src(config.src)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  };
}

function setupUglify(config) {
  return function() {
    return gulp.src(config.src)
      .pipe(concat(config.minName))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(distFolder));
  };
}

function setupConcat(config) {
  return function() {
    return gulp.src(config.src, {
        base: '.'
      })
      .pipe(concat(config.name))
      .pipe(gulp.dest(distFolder));
  };
}

//just as indication
gulp.task('lintDirective', setupLint(conf.directive));
gulp.task('lintComponent', setupLint(conf.component));
gulp.task('lint', gulp.parallel('lintDirective', 'lintComponent'));

gulp.task('uglifyDirective', setupUglify(conf.directive));
gulp.task('uglifyComponent', setupUglify(conf.component));
gulp.task('uglify', gulp.parallel('uglifyDirective', 'uglifyComponent'));

gulp.task('concatDirective', setupConcat(conf.directive));
gulp.task('concatComponent', setupConcat(conf.component));
gulp.task('concat', gulp.parallel('concatDirective', 'concatComponent'));

gulp.task('clean', function() {
  return del([distFolder + '/*'], {
    force: true
  });
});

gulp.task('build', gulp.series('clean', 'lint', 'uglify', 'concat', function() {
  var version = packageJson.version;
  var string = '/** \n* @version ' + version + '\n* @license MIT\n*/\n';

  return gulp.src(distFolder + '*.js')
    .pipe(insert.prepend(string))
    .pipe(gulp.dest(distFolder));
}));
