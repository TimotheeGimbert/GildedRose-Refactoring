const { Item } = require("./Item")

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality = () => {
    console.log('aged Brie quality change)');
    this.quality += 1;
  }
}

module.exports = { AgedBrie };