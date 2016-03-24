describe("Category", function () {
  var Category = require("../../app/js/model/category.js");
  var Sound = require("../../app/js/model/sound.js");

  var category;

  beforeEach(function () {
    category = new Category("name", "path");
  });

  it("Should have property 'name' defined", function () {
    expect(category.name).toBe("name");
  });

  it("Should have property 'path' defined", function () {
    expect(category.path).toBe("path");
  });

  it("Should have property 'sounds' as empty array", function () {
    expect(category.sounds.length).toBe(0);
  });

  it("Should have property 'visible' defined with default value 'true'", function () {
    expect(category.visible).toBe(true);
  });

  it("Should add a sound to 'sounds' array", function () {
    category.addSound(new Sound("title", "path", category));
    expect(category.sounds.length).toBe(1);
  });

  it("Should call event on visible state change", function (done) {
    category.onChangeVisible = function (cat) {
      expect(category.visible).toBe(false);
      expect(category.visible).toBe(cat.visible);
      done();
    };
    category.visible = false;
  });

});
