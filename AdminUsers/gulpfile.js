var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('server', function () {
  browserSync({
    server: {
      baseDir: "public",
      online: false,
      notify: false,
      logLevel: 'debug',
      port: 3000
    }
  });
});

gulp.task('watch', function () {
  gulp.watch(['public/**'], function () {
    reload();
  });
});

gulp.task('default', ['server', 'watch']);

/*

browser: ["google chrome", "firefox"],
open: false,
online: false,
logLevel: 'debug',
notify: false,
port: 3000,
middleware: [
  function (req, res, next) {
    console.log("Hi from first middleware");
    next();
  },
  function (req, res, next) {
    console.log("Hi from the second middleware");
    next();
  }
]

*/
