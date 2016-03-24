describe("FilterController", function () {
  var FileController = require("../../app/js/controller/fileController.js");
  var FilterController = require("../../app/js/controller/filterController.js");
  var testDataDir = "spec/testData";

  var filterController;
  var filterCategories;

  beforeEach(function (done) {
    filterController = new FilterController();
    var fileController = new FileController();
    fileController.loadFiles(testDataDir, function (error, categories) {
      if (error) {
        fail(error);
      } else{
        filterCategories = categories;
        done();
      }
    });
  });

  it("Should match first sound of first category. First category and its first sound should be visible. The others invisible", function (done) {
    filterController.filter(filterCategories, "file1-1", function (error) {
      if (error) {
        fail(error);
      } else {
        expect(filterCategories[0].visible).toBe(true);
        expect(filterCategories[0].sounds[0].visible).toBe(true);
        expect(filterCategories[0].sounds[1].visible).toBe(false);
        expect(filterCategories[1].visible).toBe(false);
        expect(filterCategories[1].sounds[0].visible).toBe(false);
        expect(filterCategories[1].sounds[1].visible).toBe(false);
        expect(filterCategories[1].sounds[2].visible).toBe(false);
        done();
      }
    });
  });

  it("Filter shoud match second category. First Category and its sounds shoud be invisible. Second category and its sounds should be visible.", function (done) {
    filterController.filter(filterCategories, "cat2", function (error) {
      if (error) {
        fail(error);
      } else {
        expect(filterCategories[0].visible).toBe(false);
        expect(filterCategories[0].sounds[0].visible).toBe(false);
        expect(filterCategories[0].sounds[1].visible).toBe(false);
        expect(filterCategories[1].visible).toBe(true);
        expect(filterCategories[1].sounds[0].visible).toBe(true);
        expect(filterCategories[1].sounds[1].visible).toBe(true);
        expect(filterCategories[1].sounds[2].visible).toBe(true);
        done();
      }
    });
  });

  it("All categories and sounds should be visible", function (done) {
    filterController.filter(filterCategories, "", function (error) {
      if (error) {
        fail(error);
      } else {
        expect(filterCategories[0].visible).toBe(true);
        expect(filterCategories[0].sounds[0].visible).toBe(true);
        expect(filterCategories[0].sounds[1].visible).toBe(true);
        expect(filterCategories[1].visible).toBe(true);
        expect(filterCategories[1].sounds[0].visible).toBe(true);
        expect(filterCategories[1].sounds[1].visible).toBe(true);
        expect(filterCategories[1].sounds[2].visible).toBe(true);
        done();
      }
    });
  });

});
