describe("App", function () {
  var App = require("../app/js/app.js");
  var testDataDir = "spec/testData";

  var app;

  beforeEach(function () {
    app = new App();
  });

  it("Should start with an empty array of categories", function () {
    expect(app.categories.length).toBe(0);
  });

  it("Should load files using FileController", function (done) {
    app.loadFiles(testDataDir, function (error, categories) {
      if (error) {
        fail(error);
      } else {
        expect(categories.length).toBeGreaterThan(0);
      }
      done();
    });
  });

  it("Should filter categories usin FilterController", function (done) {
    app.loadFiles(testDataDir, function (error, categories) {
      if (error) {
        fail(error);
      } else {
        app.filter("file1-1", function (error) {
          if (error) {
            fail(error);
          } else {
            expect(app.categories[0].visible).toBe(true);
            expect(app.categories[0].sounds[0].visible).toBe(true);
            expect(app.categories[0].sounds[1].visible).toBe(false);
            expect(app.categories[1].visible).toBe(false);
            expect(app.categories[1].sounds[0].visible).toBe(false);
            expect(app.categories[1].sounds[1].visible).toBe(false);
            expect(app.categories[1].sounds[2].visible).toBe(false);
            done();
          }
        });
      }
    });
  });

});
