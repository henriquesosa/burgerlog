var recipe = require('../lib/burger/recipe');
var expect = require('chai').expect;

describe('Recipe', function() {
  describe('getIngredients', function() {
    it('should return an object', function () {
      expect(recipe.getIngredients()).to.be.a('object');
    });

    it('should return all ingredients', function () {
      var result = recipe.getIngredients();
      expect(result).to.have.property('salad').to.equal(false);
      expect(result).to.have.property('cheese').to.equal(true);
      expect(result).to.have.property('vegan').to.equal(false);
    });
  });

  describe('hasSalad', function () {
    it('should return true', function () {
      recipe.setIngredients({
        salad: true
      });
      expect(recipe.hasSalad()).to.equal(true);
    });
  });

  describe('hasCheese', function () {
    it('should return true', function () {
      recipe.setIngredients({
        cheese: true
      });
      expect(recipe.hasCheese()).to.equal(true);
    });
  });

  describe('isVegan', function () {
    it('should return true', function () {
      recipe.setIngredients({
        vegan: true
      });
      expect(recipe.isVegan()).to.equal(true);
    });
  });

  describe('setIngredients', function () {
    it('should return an object', function () {
      recipe.setIngredients({
        salad: true,
        vegan: true,
        cheese: false
      });

      var result = recipe.getIngredients();

      expect(result).to.have.property('salad').to.equal(true);
      expect(result).to.have.property('cheese').to.equal(false);
      expect(result).to.have.property('vegan').to.equal(true);
    });
  });
});