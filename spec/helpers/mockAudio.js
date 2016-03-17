"use strict";

function MockAudio (filePath) {
  return {
    file: filePath,
    audioTracks: null,
    autoplay: false,
    buffered: true,
    controller: null,
    controls: false,
    crossOrigin: "",
    currentSrc: filePath,
    currentTime: 0,
    defaultMuted: false,
    defaultPlaybackRate: 1.0,
    duration: 1,
    ended: false,
    error: null,
    loop: false,
    mediaGroup: "",
    mozAudioChannelType: "",
    muted: false,
    networkState: 0,
    paused: true,
    playbackRate: 1.0,
    readyState: 0,
    seekable: null,
    sinkId: "",
    volume: 1,
    _timeoutPlay: null,
    play: function () {
      this.paused = false;
      this.ended = false;
      this.currentTime = 0;
      this._timeoutPlay = setTimeout(function () {
        this.paused = true;
        this.ended = true;
        this.currentTime = 1;
      }, 1000);
    },
    pause: function () {
      clearTimeout(this._timeoutPlay);
      this.paused = true;
    }
  };
}

module.exports = MockAudio;
