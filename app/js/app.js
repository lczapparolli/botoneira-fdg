(function () {
  "use strict";

  var FileController = require("./controller/fileController.js");
  var FilterController = require("./controller/filterController.js");

  class App {
    constructor () {
      this.categories = [];
    }

    loadFiles (path, callback) {
      var that = this;
      new FileController().loadFiles(path,
        function (error, categories) {
          if (!error) {
            that.categories = categories;
          }
          callback(error, categories);
        });
    }

    filter (str, callback) {
      new FilterController().filter(this.categories, str, callback);
    }
  }

  module.exports = App;
})();
