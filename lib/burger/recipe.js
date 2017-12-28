var ingredients = {
  salad: false,
  cheese: true,
  vegan: false
};

function getIngredient(key) {
  const i = ingredients[key];
  return i ? i : null;
}

module.exports = {
  getIngredients: function() {
    return ingredients;
  },
  hasSalad: function() {
    return getIngredient('salad');
  },
  hasCheese: function() {
    return getIngredient('cheese');
  },
  isVegan: function() {
    return getIngredient('vegan');
  },
  setIngredients: function(newIngredients) {
    ingredients = Object.assign({}, ingredients, newIngredients);
  }
};
