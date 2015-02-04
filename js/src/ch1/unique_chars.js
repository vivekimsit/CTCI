;(function() {
  if (module && module.exports) {
    module.exports = hasUniqueChars;
  } else {
    this.hasUniqueChars = hasUniqueChars;
  }

  function hasUniqueChars(str) {
    if (str.length > 256) {
      return false;
    }

    var len = str.length;

    if (len === 0) {
      return true;
    }

    var charMap = new Array();

    for(var i = 0; i < 256; i++) {
      charMap[i] = false;
    };

    for(var i = 0; i < len; i++) {
      var charCode = str.charCodeAt(i);
      if (charMap[charCode]) {
        return false;
      }
      charMap[charCode] = true;
    };

    return true;
  }
}());
