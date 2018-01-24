module.exports = function() {
    $.gulp.task('libsJS:src', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js',
                           'node_modules/slick-carousel/slick/slick.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/assets/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js',
                           'node_modules/slick-carousel/slick/slick.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/assets/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./src/assets/js/*.js',
                           '!./src/assets/js/libs.min.js'])
            .pipe($.gulp.dest('./build/assets/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
