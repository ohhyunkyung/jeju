var gulp = require("gulp"),
    gulpInc = require("gulp-file-include"),
    bs = require("browser-sync").create();

function inc(){
  return gulp.src('src/static/html/**/*.html')
  .pipe(gulpInc({
    prefix : '@@',
    basepath : '@file'
  }))
  .pipe(gulp.dest('src/views/'))
  .pipe(bs.stream());
}

function css(){
  return gulp.src('src/css/*.css')
  .pipe(bs.stream());
}

function js(){
  return gulp.src('src/js/*.js')
  .pipe(bs.stream());
}

function watch(){
  bs.init({
    server :{
      baseDir : 'src/',
      index: 'views/common/index.html'
    }
  });
  gulp.watch('src/static/html/**/*.html', inc);
  gulp.watch('src/static/inc/*.html', inc);
  gulp.watch('src/css/**/*.css', css);
  gulp.watch('src/js/**/*.js', js);
}

exports.inc = inc;
exports.watch = watch;