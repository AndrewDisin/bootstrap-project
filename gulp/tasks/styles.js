module.exports = function () {
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');
    var mqpacker = require('css-mqpacker');
    var pxtorem = require('postcss-pxtorem');
    var sortCSSmq = require('sort-css-media-queries');

    $.gulp.task('scss:build', () => {
        var processors = [ pxtorem({replace: false}), mqpacker({sort: sortCSSmq.desktopFirst}), autoprefixer({browsers: ['last 10 version']}) ];
        return $.gulp.src(['./src/assets/sass/main.scss', './src/assets/sass/libs.scss'])
            .pipe($.gp.sass({
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe(postcss(processors))
            .pipe($.gulp.dest('./build/assets/css/'))
    });

    $.gulp.task('scss:src', () => {
        var processors = [ pxtorem({replace: false}), mqpacker({sort: sortCSSmq.desktopFirst}), autoprefixer({browsers: ['last 10 version']}) ];
        return $.gulp.src(['./src/assets/sass/main.scss', './src/assets/sass/libs.scss'])
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Scss',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe(postcss(processors))
            .pipe($.gulp.dest('./build/assets/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
