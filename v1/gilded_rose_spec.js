var {Shop, Item, Sulfuras, AgedBrie, BackstagePasses} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("Standard items should decrease quality by one when sellIn >= 0", function() {
    const gildedRose = new Shop([ new Item("Standard Item 1", 3, 11) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(10);
  });

  it("Standard items should decrease quality by two when sellIn < 0", function() {
    const gildedRose = new Shop([ new Item("Standard Item 1", -2, 11) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it("Standard items should decrease sellIn by one", function() {
    const gildedRose = new Shop([ new Item("Standard Item 1", 3, 11) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
  });

  it("Sulfuras should not change sellIn", function() {
    const gildedRose = new Shop([ new Sulfuras("Sulfura 1", 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
  });

  it("Aged Bries should increase in quality", function() {
    const gildedRose = new Shop([ new AgedBrie("Aged Brie 1", 6, 7) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("Aged Bries have a quality limit of 50", function() {
    const gildedRose = new Shop([ new AgedBrie("Aged Brie 1", 6, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Backstage Passes have a quality limit of 50", function() {
    const gildedRose = new Shop([ new BackstagePasses("Backstage Pass 1", 3, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Backstage Passes increase their quality by 3 if sellIn < 5", function() {
    const gildedRose = new Shop([ new BackstagePasses("Backstage Pass 2", 4, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(33);
  });

  it("Backstage Passes increase their quality by 2 if sellIn > 5 but < 10", function() {
    const gildedRose = new Shop([ new BackstagePasses("Backstage Pass 3", 7, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(32);
  });

  it("Conjured items should decrease quality é times more than standard items", function() {
    const gildedRose = new Shop([ new Item("Conjured Item 1", 5, 11) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it("Conjured items should decrease quality é times more than standard items when sellIn < 0", function() {
    const gildedRose = new Shop([ new Item("Conjured Item 1", -2, 11) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
  });

});