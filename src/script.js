var Oneone = (function() {

  /* Overridable settings */
  var settings = {};

  var init = function(override) {
    for (var key in override) {
      if (options.hasOwnProperty(key)) {
        settings[key] = override[key];
      }
    }

    console.log('Hello World');
  }

  return {
    init: init
  }

})();
