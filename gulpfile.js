var gulp = require('gulp'),
    rename = require('gulp-rename'),
    traceur = require('gulp-traceur'),
    webserver = require('gulp-webserver');

// run init tasks
gulp.task('default', ['dependencies', '@angular', 'rxjs', 'angular2-in-memory-web-api', 'zonejs', 'bootstrap', 'fonts', 'js', 'html', 'css']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
});

// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/core-js/client/shim.min.js',
    'node_modules/jquery/dist/jquery.min.js'
  ])
    .pipe(gulp.dest('build/lib'));
});
// move @angular dependencies into build dir
gulp.task('@angular', function () {
  return gulp.src([
    'node_modules/@angular/**/*.*'
  ])
    .pipe(gulp.dest('build/lib/@angular'));
});
// move RxJS dependencies into build dir
gulp.task('rxjs', function () {
  return gulp.src([
    'node_modules/rxjs/**/*.*'
  ])
    .pipe(gulp.dest('build/lib/rxjs'));
});
// move angular2-in-memory-web-api dependencies into build dir
gulp.task('angular2-in-memory-web-api', function () {
  return gulp.src([
    'node_modules/angular2-in-memory-web-api/**/*.*'
  ])
    .pipe(gulp.dest('build/lib/angular2-in-memory-web-api'));
});
// move zonejs dependencies into build dir
gulp.task('zonejs', function () {
  return gulp.src([
    'node_modules/zone.js/**/*.*'
  ])
    .pipe(gulp.dest('build/lib/zonejs'));
});
// move bootstrap dependencies into build dir
gulp.task('bootstrap', function(){
  return gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])
    .pipe(gulp.dest('build/lib/bootstrap'));
});
// move bootstrap dependencies into build dir
gulp.task('fonts', function(){
  return gulp.src([
    'node_modules/bootstrap/dist/fonts/**/*.*'
  ])
    .pipe(gulp.dest('build/lib/fonts'));
});
    
// move html
gulp.task('js', function () {
  return gulp.src([
    'src/**/*.js',
    'src/**/*.js.map'
  ])
    .pipe(gulp.dest('build'))
});

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});
