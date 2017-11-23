(function () {
  "use strict";

  var fs = require("fs");
  var path = require("path");
  var Category = require("../model/category.js");
  var Sound = require("../model/sound.js");

  class FileController {
    static audioExtensions () { return [".3gp",".aa",".aac",".aax",".act",".aiff",".amr",".ape",".au",".awb",".dct",".dss",".dvf",".flac",".gsm",".iklax",".ivs",".m4a",".m4b",".m4p",".mmf",".mp3",".mpc",".msv",".ogg",".oga",".opus",".ra",".rm",".raw",".sln",".tta",".vox",".wav",".wma",".wv",".webm"]; }

    loadFiles (dirPath, callback) {
      try {
        var folders = fs.readdirSync(dirPath);
        var categories = [];
        for (var i = 0; i < folders.length; i++) {
          var category = this.processCategory(path.join(dirPath, folders[i]), folders[i]);
          if (category) {
            categories.push(category);
          }
        }
        callback(undefined, categories);
      } catch (error) {
        callback(error, undefined);
      }
      return;
    }

    processCategory (dirPath, categoryName) {
      var stats = fs.statSync(dirPath);
      if (stats.isDirectory()) {
        var files = fs.readdirSync(dirPath);
        var category = new Category(categoryName, dirPath);
        for (var i = 0; i < files.length; i++) {
          var filePath = path.join(dirPath, files[i]);
          var fileExtension = path.extname(files[i]);
          var fileStats = fs.statSync(filePath);
          var fileWithoutExt = path.parse(files[i]).name;
          if (fileStats.isFile() && (FileController.audioExtensions().indexOf(fileExtension) >= 0)) {
            category.addSound(new Sound(fileWithoutExt, filePath, category));
          }
        }
        return category;
      }
    }
  }

  module.exports = FileController;
})();
