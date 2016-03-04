'use strict';
function Category (pName, pPath){
  return {
    name: pName,
    path: pPath,
    sounds: [],
    addSound: function(sound) {
      this.sounds.push(sound);
    }
  };
}

module.exports = Category;
