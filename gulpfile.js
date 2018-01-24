global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});


$.gulp.task('src', $.gulp.series(
    'clean',
    $.gulp.parallel('sass:src', 'pug', 'libsJS:src', 'js:copy', 'svg', 'img:src', 'fonts')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('sass:build', 'pug', 'libsJS:build', 'js:copy', 'svg', 'img:build', 'fonts')));


$.gulp.task('default', $.gulp.series(
    'src',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
