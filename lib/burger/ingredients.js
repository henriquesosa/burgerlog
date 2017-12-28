const ingredients = {
  breadTop: [
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0_....----"""----...._',
    '\xa0\xa0\xa0\xa0.-\'  o    o    o    o   \'-.',
    '\xa0\xa0\xa0/  o    o    o         o    \\',
    '\xa0\xa0/__o___o_ _ o___ _ o_ o_ _ _o_\\'
  ],
  breadBottom: [
    '\xa0\xa0\xa0\\                           /',
    '\xa0\xa0\xa0\xa0`-._____________________.-\''
  ],
  salad: '\xa0\xa0~~~`-`.__.`-~`._.~`-`~.-~._.~~~',
  cheese: '\n\xa0\xa0\\~`-`.__.`-~`._.~`-`~.-~._.~`-/',
  burgerTop: '/                                 \\\n',
  burgerBottom: '\n\\_________________________________/'
};

function mountIngredient(i) {
  return typeof i === 'string' ? i : i.reduce(function(prev, next) {
    return prev + '\n' + next;
  });
}

module.exports = function(i) {
  return ingredients[i] ? mountIngredient(ingredients[i]) : '';
}