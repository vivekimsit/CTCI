/*
 * Find if two strings are permutations of each other.
 * The above problem can be reduced to the problem of checking if
 * two strings have the same number characters.
 * A is reduced to B
 * B can be decomposed to:
 *  1. The total number of characters should be same.
 *  2. Each character count should be same.
 *
 * Assumptions: Input consists of ASCII characters only.
 *
 */
;(function(){
  if(module && module.exports) {
    module.exports = isPermutation;
  } else {
    this.isPermutation = isPermutation;
  }

  function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    } else {
      var charMap = new Array();
      // ASCII has 256 different character codes.
      for(var i = 0; i < 256; i++) {
        charMap[i] = 0;
      }
      for(var i = 0; i < str1.length; i++) {
        var char = str1.charAt(i);
        var charCode = char.charCodeAt();
        charMap[charCode]++;
      }
      for(var i = 0; i < str2.length; i++) {
        var char = str2.charAt(i);
        var charCode = char.charCodeAt();
        charMap[charCode]--;
        if(charMap[charCode] < 0) {
          return false;
        }
      }
      return true;
    }
  }
}());
