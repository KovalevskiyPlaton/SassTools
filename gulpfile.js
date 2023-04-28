// function hello(cb){
//     console.log('Hellow Gulp')
// }
//
// exports.hello = hello;
//<!--UsedSource: https://www.youtube.com/@NetNinja-->

const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyle(){
    return src('shinobi/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'))
}

function watchTask(){
    watch(['shinobi/**/*.scss', '*.html'], buildStyle)
}

exports.default = series (buildStyle, watchTask)

