var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jasmine = require("gulp-jasmine");

var paths = {
  scripts: ["./app/main.js", "./app/js/**/*.js"],
  specs: ["./spec/**/*[sS]pec.js"],
  jasmine: "./spec/support/jasmine.json"
};

gulp.task("default", ["test"], function() {
  // place code for your default task here
});

gulp.task("lint", function () {
  return gulp.src(paths.scripts)
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter('default'));
});

gulp.task("test", ["lint"], function () {
  return gulp.src(paths.specs)
    .pipe(jasmine());
});

gulp.task("run", ["test"], function () {
// TODO: Set "Debug" environment
// TODO: Call electron to run app
});

gulp.task("build", ["test"], function () {
// TODO: Set "Release" environment
// TODO: Call electron to pack app
});
