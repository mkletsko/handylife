var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    dest = require('gulp-dest'),
    uncss = require('gulp-uncss'),
    notify = require("gulp-notify"),
    cors = require('cors'),
    concatCSS = require('gulp-concat-css');

//less
gulp.task('less', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(autoprefixer('last 11 versions'))
        .pipe(gulp.dest('css'));
});

//html
gulp.task('html', function(){
    gulp.src('index.html')
        .pipe(connect.reload());
})

//css
gulp.task('css', function(){
    gulp.src('css/style.css')
        .pipe(connect.reload());
});

//watch
gulp.task('watch', function(){
    gulp.watch('less/style.less', ['less'])
    gulp.watch('index.html', ['html'])
    gulp.watch('css/style.css', ['css'])
});

//connect
gulp.task('connect', function() {
    connect.server({                           
        root: '',
        livereload: true,
    });
});

gulp.task('default', ['connect', 'html', 'less', 'watch', 'css']);