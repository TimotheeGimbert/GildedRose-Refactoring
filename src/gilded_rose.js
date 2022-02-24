class Shop {
  constructor(items=[]){
    this.items = items;
  }

  shouldUpdateQuality = (itemQuality) => {
    return (itemQuality < 0 || itemQuality >= 50) ? false : true;
  }

  updateQuality() {
    this.items.forEach( (item) => {
      if(item.constructor.name == 'Legendary') return;
      item.sellIn -= 1;
      if (this.shouldUpdateQuality(item.quality)) item.updateQuality();
      if (item.quality > 50) item.quality = 50;
    });
    return this.items;
  }
}

module.exports = { Shop };