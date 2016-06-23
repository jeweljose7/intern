var gulp = require('gulp'),
    eslint = require('gulp-eslint');

var beautify = require('gulp-jsbeautify');

gulp.task('beautify', function() {
    gulp.src('./*.js')
        .pipe(beautify({
            indentSize: 2
        }))
        .pipe(gulp.dest('./build/'));
});






gulp.task('lint', function() {
    return gulp.src(['./*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint', 'beautify'], function() {
    // This will only run if the lint task is successful... 
});