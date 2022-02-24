const { Item } = require("./Item")

class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality = () => {
    if (this.sellIn < 0) return this.quality = 0;
    if (this.sellIn > 10) return this.quality += 1;
    if (this.sellIn > 5) return this.quality += 2;
    else return this.quality += 3;
  }
}

module.exports = { BackstagePasses };