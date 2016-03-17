"use strict";

function PlayController(MockAudio) {
  return {
    _sound: null,
    _audio: null,
    loadFile: function (sound) {
      this._sound = sound;
      if (MockAudio) {
        this._audio = new MockAudio(this._sound.path);
      } else {
        this._audio = new Audio(this._sound.path);
      }
    },
    _executeIfLoaded: function(method) {
      if (this._sound) {
        return method(this);
      } else {
        throw "Audio not loaded";
      }
    },
    getSound: function() {
      return this._executeIfLoaded(function (instance) {
        return instance._sound;
      });
    },
    getDuration: function () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.duration;
      });
    },
    getPaused: function () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.paused;
      });
    },
    getCurrentTime: function () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.currentTime;
      });
    },
    getVolume: function () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.volume;
      });
    },
    setVolume: function (volume) {
      if (!isNaN(volume)) {
        this._executeIfLoaded(function (instance) {
          instance._audio.volume = volume;
        });
      } else {
        throw "Invalid volume value";
      }
    },
    play: function () {
      return this._executeIfLoaded(function (instance) {
        instance._audio.play();
      });
    },
    pause: function () {
      return this._executeIfLoaded(function (instance) {
        instance._audio.pause();
      });
    }
  };
}

module.exports = PlayController;
