var ingredients = require('../lib/burger/ingredients');
var expect = require('chai').expect;

describe('Ingredients', function () {
  it('should return a valid string', function () {
    expect(ingredients('burgerBottom')).to.be.a('string').with.lengthOf(36);
  });

  it('should return a empty string', function () {
    expect(ingredients('Lorem')).to.be.a('string').with.lengthOf(0);;
  });
});