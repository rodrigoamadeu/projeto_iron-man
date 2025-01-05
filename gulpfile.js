const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles () {
    return gulp.src('./src/styles/*.scss')//recupera os arquivos
        .pipe(sass({outputStyle: 'compressed'})) // vai fazer a saída e comprimir
        .pipe(gulp.dest('./dist/css'));

}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}