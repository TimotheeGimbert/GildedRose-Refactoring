const { Item } = require("./Item")

class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}

module.exports = { Legendary };