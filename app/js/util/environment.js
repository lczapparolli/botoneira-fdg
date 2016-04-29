(function () {
  "use strict";

  class Environment {
    static get debug() {
      return (typeof process.env.NODE_ENV !== "undefined") && (process.env.NODE_ENV.toLowerCase() === "debug");
    }

    static get release() {
      return !Environment.debug;
    }

    static get env() {
      return Environment.debug?"debug":"release";
    }

    static log(text) {
      if (Environment.debug) {
        console.log(text);
      }
    }
  }

  module.exports = Environment;
})();
