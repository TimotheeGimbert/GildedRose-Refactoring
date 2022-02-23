class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  evolve = () => {
    this.sellIn -= 1;
    if (this.quality <= 0 || this.quality >= 50) return;
    if (this.name.startsWith('Conjured')) {
      this.sellIn >= 0 ? this.quality -= 2 : this.quality -= 4;
    } 
    else {
      this.sellIn >= 0 ? this.quality -= 1 : this.quality -= 2;
    }
  }
}

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  evolve = () => {
    return;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  evolve = () => {
    this.sellIn -= 1;
    if (this.quality >= 50) return;
    this.quality += 1;
  }
}

class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  evolve = () => {
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }
    if (this.quality >= 50) return;
    if (this.sellIn > 10) this.quality += 1;
    else if (this.sellIn > 5) this.quality += 2;
    else this.quality += 3;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach( (item) => item.evolve() );
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  Sulfuras,
  AgedBrie,
  BackstagePasses
}