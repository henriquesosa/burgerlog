const colors = require('colors');
const recipe = require('./recipe');
const ingredients = require('./ingredients');

colors.setTheme({
  meat: ['red', 'bold'],
  cheese: ['yellow', 'bold'],
  vegan: ['grey', 'bold'],
  salad: ['green', 'bold'],
  bread: ['white', 'bold']
})

function bakeBread() {
  return {
    top: ingredients('breadTop').bread,
    bottom: ingredients('breadBottom').bread
  };
}

function getComplements() {
  return recipe.hasSalad() ? ingredients('salad').salad : '';
}

function addSpaces(string, spaces) {
  var newString = string + '\xa0';
  if(spaces > 1) {
    return addSpaces(newString, spaces - 1);
  }
  return newString;
}

function prepareLayers(pattern1, content, pattern2, breakPoint) {
  var splittedContent = [];
  var unMovedContent = content;

  unMovedContent = unMovedContent.split('');

  while (unMovedContent.length >= breakPoint) {
    splittedContent.push(pattern1 + unMovedContent.splice(0, 31).join('') + pattern2);
  }

  if(unMovedContent.length > 0) {
    var spaces = breakPoint - unMovedContent.length;
    var string = unMovedContent.join('');
    string = addSpaces(string, spaces);
    splittedContent.push(pattern1 + string + pattern2);
  }

  return splittedContent.join('\n');
}

function smash(content) {
  const smashedContent = prepareLayers('| ', content, ' |', 31);
  return ingredients('burgerTop') + smashedContent + ingredients('burgerBottom') ;
}

function grill(c) {
  const cheese = recipe.hasCheese() ? ingredients('cheese').cheese : '';
  const content = smash(c);
  const grilled = recipe.isVegan() ? content.vegan : content.meat;

  return grilled + cheese;
}

function prepare(content) {
  const bread = bakeBread();
  const complements = getComplements();
  const meat = grill(content);

  return [
    bread.top,
    complements,
    meat,
    bread.bottom
  ];
}

module.exports = function(content) {
  const burger = prepare(content);

  burger.forEach(function(line) {
    if(line.length) console.log(line);
  })
}
