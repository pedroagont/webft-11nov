const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;
const numberOfVowels = require('../vowels');

describe('numberOfVowels', function () {
  it('should return 2 when passing Pedro', function () {
    const actual = numberOfVowels('Pedro');
    const expected = 2;
    assert.equal(actual, expected);
  });

  it('should return 4 when passing Lighthouse', function () {
    const actual = numberOfVowels('Lighthouse');
    const expected = 4;
    assert.equal(actual, expected);
  });

  it('should return 5 when passing aeiou', function () {
    const actual = numberOfVowels('aeiou');
    const expected = 5;

    actual.should.be.a('number');
    actual.should.equal(expected);
  });

  it('should return null when passing no argument', function () {
    const actual = numberOfVowels();
    const expected = null;

    expect(actual).to.equal(expected);
  });
});
