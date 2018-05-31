var gulp = require("gulp"); //npm install gulp --save-dev
var less = require("gulp-less"); //npm install gulp-less --save-dev


gulp.task("less",function () {
    gulp.src("./*.less")
        .pipe(less())
        .pipe(gulp.dest("./"));
});

gulp.task("default",["less"]);