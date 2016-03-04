describe("FileController", function () {
  var FileController = require("../../app/js/controller/fileController.js");
  var testDataDir = "spec/testData";

  var fileController;

  beforeEach(function () {
    fileController = new FileController();
  });

  it("Should load categories and audio files async", function (done) {
    fileController.loadFiles(testDataDir, function (error, categories) {
      if (error) {
        fail(error);
      } else {
        expect(categories.length).toBe(2);
        expect(categories[0].sounds.length).toBe(2);
        expect(categories[1].sounds.length).toBe(3);
      }
      done();
    });
  });

});
