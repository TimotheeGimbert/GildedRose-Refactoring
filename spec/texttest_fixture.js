const { Item } = require("../src/items/Item");
const { Legendary } = require("../src/items/Legendary");
const { AgedBrie } = require("../src/items/AgedBrie");
const { BackstagePasses } = require("../src/items/BackstagePasses");
const { Shop } = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new AgedBrie("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Legendary("Sulfuras, Hand of Ragnaros", 0, 80),
  new Legendary("Sulfuras, Hand of Ragnaros", -1, 80),
  new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 5, 35),
  new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 0, 49),


  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}