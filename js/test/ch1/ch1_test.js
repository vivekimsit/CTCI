'use strict';

require('../test_helper.js');


var hasUniqueChars = require('../../src/ch1/unique_chars');

describe('hasUniqueChars', function() {
  it('returns false if chars are same', function() {
    expect(hasUniqueChars('lol')).to.be.false;
  });

  it('returns true if chars are different', function() {
    expect(hasUniqueChars('bar')).to.be.true;
  });

  it('returns true if string is empty', function() {
    expect(hasUniqueChars('')).to.be.true;
  });
});
