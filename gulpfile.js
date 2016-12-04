var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
var browserSync = require("browser-sync").create();


gulp.task("image-minify", function(){
  return gulp.src("images/**/*.jpg")
    .pipe(imagemin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist"));
});

gulp.task("browser-sync", function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


gulp.task("watch", ["browser-sync"], function(){
  gulp.watch("./**/*.html", browserSync.reload);
  gulp.watch("./**/*.css", browserSync.reload);
  gulp.watch("./**/*.js", browserSync.reload);
});
