var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var minifycss = require('gulp-minify-css');






gulp.task('scss',function(){
    return gulp.src('../scss/*.scss')
        .pipe(compass({
            css:'../dev/css',
            sass:'../dev/scss'

        }))
        .on('error',function(){
            console.log('error');
        })
});

gulp.task('css', function() {
    return gulp.src('../dev/css/*.css')      //压缩的文件
        .pipe(minifycss({
            advanced:false,
            //compatibility:'ie7',
            keepBreaks:false
        }))
        .pipe(gulp.dest('../release/css/'));   //输出文件夹

});


gulp.task('auto',function(){
    gulp.watch('../dev/scss/*.scss',['scss']);
    gulp.watch('../dev/css/*.css',['css']);
});


