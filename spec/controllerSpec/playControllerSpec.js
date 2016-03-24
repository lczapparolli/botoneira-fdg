describe("PlayController", function () {
  var PlayController = require("../../app/js/controller/playController.js");
  var FileController = require("../../app/js/controller/fileController.js");
  var MockAudio = require("../helpers/mockAudio.js");
  var testDataDir = "spec/testData";
  var categories;
  var playController;


  beforeEach(function (done) {
    playController = new PlayController(MockAudio);
    var fileController = new FileController();
    fileController.loadFiles(testDataDir, function (error, data) {
      if (error) {
        fail("Could not load files: " + error);
      } else {
        categories = data;
        playController.loadFile(data[0].sounds[0]);
      }
      done();
    });
  });

  it("Should load audio file", function (done) {
    expect(playController.sound).toBe(categories[0].sounds[0]);
    done();
  });

  it("Should show audio duration", function (done) {
    expect(playController.duration).toBeGreaterThan(0);
    done();
  });

  it("Should play and pause the audio", function (done) {
    playController.play();
    expect(playController.paused).toBe(false);
    playController.pause();
    expect(playController.paused).toBe(true);
    done();
  });

  it("Should show audio current time", function (done) {
    expect(playController.currentTime).toBe(0);
    done();
  });

  it("Can change audio volume", function (done) {
    playController.volume = 0.1;
    expect(playController.volume).toBe(0.1);
    done();
  });

});
