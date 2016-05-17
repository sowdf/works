var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var minifycss = require('gulp-minify-css');

/*
gulp.task('css', function() {
    return gulp.src('./css/!*.css')      //压缩的文件
        .pipe(minifycss({
            advanced:false,
            //compatibility:'ie7',
            keepBreaks:false
        }))
        .pipe(gulp.dest('./stylesheet'));   //输出文件夹

});
*/


gulp.task('scss',function(){
    return gulp.src('./scss/*.scss')
        .pipe(compass({
            sass:'scss',
            css:'E:/h/huodong/module/y2016/resource/quanTalent/css'
        }))
        .on('error',function(){
            console.log('error');
        })
});


/*
gulp.task('scss',function(){
    return sass('scss/!*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('css'));
});
*/

gulp.task('auto',function(){
    gulp.watch('./scss/*.scss',['scss']);
});


//gulp.watch('./css/*.css',['css']);