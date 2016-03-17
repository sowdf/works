var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');

gulp.task('sass',function(){
    gulp.src('./天天好阅读活动改版/scss/*.scss')
        .pipe(compass({
            css:'./天天好阅读活动改版/css/',
            sass:'./天天好阅读活动改版/scss/'
        }))
        .on('error',function(){
            console.log('error');
        })
});
gulp.watch('./天天好阅读活动改版/scss/*.scss',function(){
    gulp.run('sass');
})