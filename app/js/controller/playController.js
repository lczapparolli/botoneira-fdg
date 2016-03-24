"use strict";

function PlayController(MockAudio) {
  this._sound = null;
  this._audio = null;
  this.MockAudio = MockAudio;
};

Object.defineProperty(PlayController.prototype, "sound", {
  get: function () {
    return this._executeIfLoaded(function (instance) {
      return instance._sound;
    });
  }
});

Object.defineProperty(PlayController.prototype, "duration", {
  get: function () {
    return this._executeIfLoaded(function (instance) {
      return instance._audio.duration;
    });
  }
});

Object.defineProperty(PlayController.prototype, "paused", {
  get: function () {
    return this._executeIfLoaded(function (instance) {
      return instance._audio.paused;
    });
  }
});

Object.defineProperty(PlayController.prototype, "currentTime", {
  get: function () {
    return this._executeIfLoaded(function (instance) {
      return instance._audio.currentTime;
    });
  }
});

Object.defineProperty(PlayController.prototype, "volume", {
  get: function () {
    return this._executeIfLoaded(function (instance) {
      return instance._audio.volume;
    });
  },
  set: function (newVolume) {
    if (!isNaN(newVolume)) {
      this._executeIfLoaded(function (instance) {
        instance._audio.volume = newVolume;
      });
    } else {
      throw "Invalid volume value";
    }
  }
});

PlayController.prototype.play = function() {
  return this._executeIfLoaded(function (instance) {
    instance._audio.play();
  });
};

PlayController.prototype.pause = function() {
  return this._executeIfLoaded(function (instance) {
    instance._audio.pause();
  });
};

PlayController.prototype.loadFile = function(sound) {
  this._sound = sound;
  if (this.MockAudio) {
    this._audio = new this.MockAudio(this._sound.path);
  } else {
    this._audio = new Audio(this._sound.path);
  }
};

PlayController.prototype._executeIfLoaded = function(method) {
  if (this._sound) {
    return method(this);
  } else {
    throw "Audio not loaded";
  }
};

module.exports = PlayController;
