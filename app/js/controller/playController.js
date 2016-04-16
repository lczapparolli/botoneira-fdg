(function () {
  "use strict";

  class PlayController {

    constructor (MockAudio) {
      this._sound = null;
      this._audio = null;
      this.MockAudio = MockAudio;
    }

    get sound () {
      return this._executeIfLoaded(function (instance) {
        return instance._sound;
      });
    }

    get duration () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.duration;
      });
    }

    get paused () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.paused;
      });
    }

    get currentTime () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.currentTime;
      });
    }

    get volume () {
      return this._executeIfLoaded(function (instance) {
        return instance._audio.volume;
      });
    }

    set volume (newVolume) {
      if (!isNaN(newVolume)) {
        this._executeIfLoaded(function (instance) {
          instance._audio.volume = newVolume;
        });
      } else {
        throw "Invalid volume value";
      }
    }

    play () {
      return this._executeIfLoaded(function (instance) {
        instance._audio.play();
      });
    }

    pause () {
      return this._executeIfLoaded(function (instance) {
        instance._audio.pause();
      });
    }

    loadFile (sound) {
      this._sound = sound;
      if (this.MockAudio) {
        this._audio = new this.MockAudio(this._sound.path);
      } else {
        this._audio = new Audio(this._sound.path);
      }
    }

    _executeIfLoaded (method) {
      if (this._sound) {
        return method(this);
      } else {
        throw "Audio not loaded";
      }
    }
  }

  module.exports = PlayController;
})();
