module.exports = function() {
    $.gulp.task('img:src', () => {
        return $.gulp.src('./src/assets/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/assets/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./src/assets/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng(YOUR_API_KEY))
            .pipe($.gulp.dest('./build/assets/img/'));
    });
};
