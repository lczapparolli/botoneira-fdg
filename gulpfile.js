var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jasmine = require("gulp-jasmine");
var childProcess  = require('child_process');
var electron = require('electron-prebuilt');

var paths = {
  scripts: ["./app/main.js", "./app/js/**/*.js"],
  specs: ["./spec/**/*[sS]pec.js"],
  jasmine: "./spec/support/jasmine.json"
};

gulp.task("default", ["test"], function() {

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
  process.env.NODE_ENV = "debug";
  return childProcess.spawn(electron, ['.'], { stdio: 'inherit' });
});

gulp.task("build", ["test"], function () {
  process.env.NODE_ENV = "release";
// TODO: Call electron to pack app
});
