"use strict";

function Category (pName, pPath){
  this.name = pName;
  this.path = pPath;
  this.sounds = [];
  this.onChangeVisible = null;
  this._visible = true;
};

Object.defineProperty(Category.prototype, "visible", {
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

Category.prototype.addSound = function(sound) {
  this.sounds.push(sound);
};

module.exports = Category;
