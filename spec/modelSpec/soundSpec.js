describe("Sound", function () {
  var Sound = require("../../app/js/model/sound.js");
  var Category = require("../../app/js/model/category.js");

  var sound;
  var category;

  beforeEach(function () {
    category = new Category("title", "path");
    sound = new Sound("name", "path", category);
  });

  it("Should have property 'name' defined", function () {
    expect(sound.name).toBe("name");
  });

  it("Should have property 'path' defined", function () {
    expect(sound.path).toBe("path");
  });

  it("Should have property 'category' defined", function () {
    expect(sound.category).toBe(category);
  });

  it("Should have property 'visible' defined with default value 'true'", function () {
    expect(sound.visible).toBe(true);
  });

  it("Should call event on visible state change", function (done) {
    sound.onChangeVisible = function (snd) {
      expect(sound.visible).toBe(false);
      expect(sound.visible).toBe(snd.visible);
      done();
    };
    sound.visible = false;
  });

});
