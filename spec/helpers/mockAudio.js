"use strict";

class MockAudio {

  constructor(filePath) {
    this.filePath = filePath;
    this.audioTracks = null;
    this.autoplay = false;
    this.buffered = true;
    this.controller = null;
    this.controls = false;
    this.crossOrigin = "";
    this.currentSrc = filePath;
    this.currentTime = 0;
    this.defaultMuted = false;
    this.defaultPlaybackRate = 1.0;
    this.duration = 1;
    this.ended = false;
    this.error = null;
    this.loop = false;
    this.mediaGroup = "";
    this.mozAudioChannelType = "";
    this.muted = false;
    this.networkState = 0;
    this.paused = true;
    this.playbackRate =  1.0;
    this.readyState = 0;
    this.seekable = null;
    this.sinkId = "";
    this.volume = 1;
    this._timeoutPlay = null;
  }

  play () {
    this.paused = false;
    this.ended = false;
    this.currentTime = 0;
    this._timeoutPlay = setTimeout(function () {
      this.paused = true;
      this.ended = true;
      this.currentTime = 1;
    }, 1000);
  }

  pause () {
    clearTimeout(this._timeoutPlay);
    this.paused = true;
  }
}

module.exports = MockAudio;
