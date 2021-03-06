# Burger Log &middot; [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![Dependecies](https://david-dm.org/henriquesosa/burger.svg)](https://david-dm.org/henriquesosa/burger) [![Build Status](https://travis-ci.org/henriquesosa/burgerlog.svg?branch=master)](https://travis-ci.org/henriquesosa/burgerlog)

Increase your hungry for logging

## Motivation

`burgerlog` was created to put all your logging information into a bread.

This project is inspired in a similar logger tool called [cowsay](https://github.com/piuccio/cowsay)

I hope you enjoy it :)

## Installation

Burguer is available as the `burgerlog` package on [npm](https://www.npmjs.com/).

    npm install --save-dev burgerlog

And to use it just call it:

    const burger = require('burger');

## Examples
Here some examples for start logging using burger

### Cheeseburger

```javascript
burger.cook('Lorem ipsum dolor sit amet');
```

Result:

```bash
       _....----"""----...._
    .-'  o    o    o    o   '-.
   /  o    o    o         o    \
  /__o___o_ _ o___ _ o_ o_ _ _o_\
/                                 \
| Lorem ipsum dolor sit amet      |
\_________________________________/
  \~`-`.__.`-~`._.~`-`~.-~._.~`-/
   \                           /
    `-._____________________.-'
```
### Smashburger

```javascript
burger.recipe.setIngredients({
    salad: true,
});

burger.cook('Lorem ipsum dolor sit amet');
```

Result:

```bash
       _....----"""----...._
    .-'  o    o    o    o   '-.
   /  o    o    o         o    \
  /__o___o_ _ o___ _ o_ o_ _ _o_\
  ~~~`-`.__.`-~`._.~`-`~.-~._.~~~
/                                 \
| Lorem ipsum dolor sit amet      |
\_________________________________/
  \~`-`.__.`-~`._.~`-`~.-~._.~`-/
   \                           /
    `-._____________________.-'
```



### Creating your own burguer

| Name          | Default                |
| ------------- | ---------------------- |
| `salad`       | `false`                |
| `vegan `      | `false`                |
| `cheese`      | `true`                 |

Yes!!! We also have vegan burgers

## License

Burger Log is [MIT licensed](./LICENSE).
