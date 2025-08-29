const gulp   = require('gulp'),
    sass   = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});


gulp.task('pug', function buildHTML() {
    return gulp.src('src/pages/*.pug')
        .pipe(pug({

        }))
        // .pipe(concat('index.html'))
        .pipe(gulp.dest('dis'))
});



gulp.task('watch', function() {
    gulp.watch('css/scss/*.scss', gulp.parallel('sass'));
    gulp.watch('src/common/*.pug', gulp.parallel('pug'));
    // gulp.watch('src/pages/*.pug', gulp.parallel('pug'));
    gulp.watch('src/includes/*.pug', gulp.parallel('pug'));
});
