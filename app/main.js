(function () {
  'use strict';

  var electron = require('electron');
  var Env = require('./js/util/environment.js');
  var electronApp = electron.app;  // Module to control application life.
  var BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  var mainWindow = null;

  // Quit when all windows are closed.
  electronApp.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
      electronApp.quit();
    }
  });

  electronApp.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/pages/index.html');
    if (Env.debug) {
      mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
      mainWindow = null;
    });
  });
})();
