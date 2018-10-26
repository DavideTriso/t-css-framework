//Require packages
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify');
sass.compiler = require('node-sass');

//SCSS -> CSS
//Compile SCSS and save compiled + minified CSS file to 'dist' folder
gulp.task('scssDist', function () {
  return sass('src/**/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 5 version'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'scssDist task complete' }));
});

//Save a copy of compiled CSS in 'docs' folder
gulp.task('scssDocs', function () {
  return sass('src/**/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 5 version'))
    .pipe(gulp.dest('docs'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(notify({ message: 'scssDocs task complete' }));
});


//WATCH TASKS
gulp.task('watchScss', function () {
  gulp.watch('src/**/*.scss', ['scssDist', 'scssDocs']);
});