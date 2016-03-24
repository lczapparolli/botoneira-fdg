"use strict";

function Sound(pTitle, pPath, pCategory) {
  this.title = pTitle;
  this.path = pPath;
  this.category = pCategory;
  this.onChangeVisible = null;
  this._visible = true;
};

Object.defineProperty(Sound.prototype, "visible", {
  get: function () {
    return this._visible;
  },

  set: function (newValue) {
    var oldValue = this._visible;
    this._visible = newValue;
    if ((oldValue !== newValue) && (typeof this.onChangeVisible === "function")) {
      this.onChangeVisible(this);
    }
  }
});

module.exports = Sound;
