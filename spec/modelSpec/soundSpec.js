describe("Sound", function () {
  var Sound = require("../../app/js/model/sound.js");
  var Category = require("../../app/js/model/category.js");

  var sound;

  beforeEach(function () {
    sound = new Sound("title", "path", new Category());
  });

  it("Should have property 'title' defined", function () {
    expect(sound.title).toBeDefined();
  });

  it("Should have property 'path' defined", function () {
    expect(sound.path).toBeDefined();
  });

  it("Should have property 'category' defined", function () {
    expect(sound.category).toBeDefined();
  });

});
