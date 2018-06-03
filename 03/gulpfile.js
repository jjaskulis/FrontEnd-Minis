const gulp = require('gulp')
const prefixer = require('gulp-autoprefixer')


gulp.task('css',()=>{
    gulp.src('src/*.css')
    .pipe(prefixer({
        browsers:['last 4 versions']
    }))
    .pipe(gulp.dest('css/'))
})

gulp.task('watch',()=>{
    gulp.watch('src/*.css',['css'])
})