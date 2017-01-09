'use strict';

var Oneone = function () {

  /* Overridable settings */
  var settings = {};

  var init = function init(override) {
    for (var key in override) {
      if (options.hasOwnProperty(key)) {
        settings[key] = override[key];
      }
    }

    console.log('Hello World');
  };

  var privateFunction = function privateFunction() {};

  return {
    init: init
  };
}();