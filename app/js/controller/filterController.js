(function () {
  "use strict";

  var matchete = require("matchete");

  class FilterController {

    filter  (categories, filter, callback) {
      var that = this;
      process.nextTick(function () {
          that._filter(categories, filter, callback);
      });
    }

    _filter  (categories, filter, callback) {
      try {
        this._filterCategories(categories, filter);
      } catch (err) {
        callback(err);
      }
      callback(undefined);
    }

    _filterCategories  (categories, filter) {
      for (var i = 0; i < categories.length; i++) {
        /**
        * If filter is empty ou filter matches category's name, then set
        * category is visible and all its sounds.
        **/
        if (this._isEmpty(filter) || matchete(categories[i].name, filter)) {
          categories[i].visible = true;
          this._setVisible(categories[i].sounds, true);
        } else {
          /**
          * If filter does not match any sound in a category then the category
          * will be invisible.
          **/
          categories[i].visible = this._filterSounds(categories[i].sounds, filter) > 0;
        }
      }
    }

    _filterSounds (sounds, filter) {
      var visibleCount = 0;
      for (var i = 0; i < sounds.length; i++) {
        sounds[i].visible = matchete(sounds[i].name, filter);
        if (sounds[i].visible) {
          visibleCount++;
        }
      }
      return visibleCount;
    }

    _setVisible (objects, visible) {
      for (var i = 0; i < objects.length; i++) {
        objects[i].visible = visible;
      }
    }

    _isEmpty (value) {
      return ((value || "") === "");
    }
  }

  module.exports = FilterController;
})();
