module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./src/assets/sass/**/*.scss', $.gulp.series('scss:src'));
        $.gulp.watch('./src/assets/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./src/assets/js/**/*.js', $.gulp.series('libsJS:src', 'js:copy'));
        $.gulp.watch(['./src/assets/img/general/**/*.{png,jpg,gif}',
                     './src/assets/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:src'));
    });
};