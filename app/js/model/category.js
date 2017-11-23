(function () {
  "use strict";

  class Category  {
    constructor (name, path) {
      this.name = name;
      this.path = path;
      this.sounds = [];
      this.onChangeVisible = null;
      this._visible = true;
    }

    get visible () {
      return this._visible;
    }

    set visible (newValue) {
      var oldValue = this._visible;
      this._visible = newValue;
      if ((oldValue !== newValue) && (typeof this.onChangeVisible === "function")) {
        this.onChangeVisible(this);
      }
    }

    addSound (sound) {
      this.sounds.push(sound);
    }
  }

  module.exports = Category;
})();
