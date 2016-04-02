var gulp = require("gulp");
var typescript = require("gulp-typescript");
var concat = require("gulp-concat");

var target = "app/scripts.typescript/**/*.ts";

gulp.task("build", function(){
  gulp.src(target)
    .pipe(typescript({ target: "ES5", removeComments: true, sortOutput: true }))
    .pipe(gulp.dest("app/scripts/"));
});

gulp.task("watch", function(){
  gulp.watch(target, ["build"]);
});

gulp.task("default", ["build", "watch"]);
