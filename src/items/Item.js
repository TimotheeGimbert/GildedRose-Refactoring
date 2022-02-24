class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality = () => {

    const decreaseQuality = (factor) => {
      this.sellIn > 0 ? this.quality -= factor : this.quality -= 2 * factor;
    }
    
    this.name.startsWith('Conjured') ? decreaseQuality(2) : decreaseQuality(1);
  }
}

module.exports = { Item };