var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var opn = require('opn');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var compileReact = require('gulp-react');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

gulp.task('compile', function () {
    browserify({
        entries: './src/components/Main.js',
        extensions: ['.js'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});

gulp.task('compile:production', function () {
    return gulp.src([
            'src/components/react-typeahead.js',
            'src/components/TypeaheadInput.js',
            'src/components/TypeaheadList.js',
            'src/components/TypeaheadListItem.js'
        ])
        .pipe(compileReact({
            harmony: true
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {
    gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:dist', function () {
    gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(buffer())
        .pipe(rename("react-typeahead.css"))
        .pipe(gulp.dest('dist'))
        .pipe(rename("react-typeahead.min.css"))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy',  function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());

    gulp.src('./src/styles/**/*.css')
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload());

    gulp.src('src/assets')
        .pipe(gulp.dest('./build/assets')).on('error', errorHandler)
});

gulp.task('copy:production', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('./dist'));

    gulp.src('src/styles/*.css')
        .pipe(gulp.dest('./dist/css'));

    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean', function () {
    return del('./build');
});

gulp.task('clean:production', function () {
    return del(['./dist']);
});

gulp.task("watch", function () {
    gulp.watch(['src/**/*.js', 'src/*.html', 'src/styles/*.scss'], function () {
        runSequence(['compile', 'copy', 'sass']);
    });
});

gulp.task('reload', function () {
    connect.reload();
});

gulp.task('opn', function () {
    opn('http://localhost:8080');
});

gulp.task('server', function () {
    connect.server({
        root: './build',
        livereload: true
    });
});

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('default', function () {
    runSequence(['clean'], ['compile'], ['sass'], ['copy'], 'server', 'opn', 'watch');
});

gulp.task('build',['default']);

gulp.task('production', function () {
    runSequence(['clean:production'], ['compile:production'],['sass:dist']);
});