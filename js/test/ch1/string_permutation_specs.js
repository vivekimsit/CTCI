'use strict';

require('../test_helper.js');


var isPermutation = require('../../src/ch1/string_permutation');

describe('isPermutation', function() {
  it('should return false if string have diff length', function() {
    expect(isPermutation('foo', 'f')).to.be.false;
    expect(isPermutation('foo', 'bar')).to.be.false;
  });

  it('should return true if strings have equal character counts', function() {
    expect(isPermutation('foo', 'foo')).to.be.true;
    expect(isPermutation('foo', 'bar')).to.be.false;
    expect(isPermutation('foo bar', 'bar foo')).to.be.true;
  });
});
