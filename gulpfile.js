var gulp         = require("gulp");
var concat       = require("gulp-concat");
var sourcemaps   = require("gulp-sourcemaps");
var eslint       = require("gulp-eslint");
var jasmine      = require("gulp-jasmine");
var electron     = require('electron-prebuilt');
var babel        = require("gulp-babel");
var childProcess = require("child_process");
var del          = require('del');
var sass         = require('gulp-sass');

var paths = {
  scripts: {
    main:  "./app/main.js",
    js:    "./app/js/**/*.js",
    sass:  "./app/scss/style.scss",
    lib:   "./app/lib/**/*",
    html:  "./app/pages/**/*.html",
    react: "./app/js/view/*.js"
  },
  build: {
    main: "./build",
    js:   "./build/js",
    css:  "./build/css",
    html: "./build/pages",
    lib:  "./build/lib"
  },
  specs: ["./spec/**/*[sS]pec.js"],
  jasmine: "./spec/support/jasmine.json"
};

gulp.task("default", ["test"], function() {

});

gulp.task("lint", function () {
  gulp.src(paths.scripts.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("test", ["lint"], function () {
  return gulp.src(paths.specs)
    .pipe(jasmine());
});

gulp.task("run", ["test", "clear", "build-main", "build-html", "build-js", "build-css", "build-lib"],
  function () {
    process.env.NODE_ENV = "debug";
    return childProcess.spawn(electron, ['.'], { stdio: 'inherit' });
  }
);

gulp.task("build", ["test", "clear", "build-main", "build-html", "build-js", "build-css", "build-lib"],
  function () {
    process.env.NODE_ENV = "release";
    // TODO: Call electron to pack app
  }
);

gulp.task("clear", [], function () {
  return del([paths.build.main]);
});

gulp.task("build-main", ["clear"], function () {
  return gulp.src(paths.scripts.main)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.build.main));
});

gulp.task("build-js", ["clear"], function () {
  return gulp.src(paths.scripts.js)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.build.js));
});

gulp.task('build-css', ["clear"], function () {
  return gulp.src(paths.scripts.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.build.css));
});

gulp.task("build-lib", ["clear"], function () {
  return gulp.src(paths.scripts.lib)
    .pipe(gulp.dest(paths.build.lib));
})

gulp.task("build-html", ["clear"], function () {
  return gulp.src(paths.scripts.html)
    .pipe(gulp.dest(paths.build.html));
})
