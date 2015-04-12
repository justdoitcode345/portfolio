var gulp = require('gulp'),
connect = require('gulp-connect'),
opn = require('opn');

//запуск локального сервера
gulp.task('connect', function() {
   connect.server({
	   root: '',
	   livereload: true,
	   port:8888
    });
   opn('http://localhost:8888');
});

//задача перезагружает страничку браузера
//как только обнаружены изменения в html
//файле
gulp.task('html', function () {
   gulp.src('*.html')
      .pipe(connect.reload());
});

//тоже для css
gulp.task('css', function () {
	gulp.src('css/*.css')
		.pipe(connect.reload());	
});

//то же для js
gulp.task('js', function() {
	gulp.src('js/*.js')
		.pipe(connect.reload());
});

//слежка за изменениями в файлах
gulp.task('watch', function () {
	gulp.watch(['*.html'], ['html']);
	gulp.watch(['js/*.js'], ['js']);
	gulp.watch(['css/*.css'], ['css']);
});
//задача по умолчанию
gulp.task('default',['connect', 'watch']);