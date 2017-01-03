'use strict';

var oo,
    Oneone = {

  settings: {},

  init: function init(options) {

    oo = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        oo[key] = options[key];
      }
    }

    console.log('Hello World');
  }

};