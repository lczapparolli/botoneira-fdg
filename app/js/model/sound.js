(function () {
  "use strict";

  class Sound {
    constructor (title, path, category) {
      this.title = title;
      this.path = path;
      this.category = category;
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
  }

  module.exports = Sound;
})();
