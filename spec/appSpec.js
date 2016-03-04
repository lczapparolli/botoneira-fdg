describe("App", function () {
  var App = require("../app/js/app.js");
  var app;

  beforeEach(function () {
    app = new App();
  });

  it("Should start with an empty array of categories", function () {
    expect(app.categories.length).toBe(0);
  });

});
