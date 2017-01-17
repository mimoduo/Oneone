var Oneone = (function() {

  /* Overridable settings */
  var s = {};
  var o = {};

  var init = function(override) {
    s = o;
    
    for (var key in override) {
      if (options.hasOwnProperty(key)) {
        s[key] = override[key];
      }
    }

    console.log('Hello World');
  };

  var privateFunction = function() {};

  return {
    init: init
  };

})();
