const GenericItem = require('./genericItem');
const Conjured = require('./conjured');
const AgedBrie = require('./agedBrie');
const SulfurasHandofRagnaros = require('./sulfuras');
const BackstagepassestoaTAFKAL80ETCconcert = require('./backstagePasses');

class Shop {
  constructor(items=[]) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].name.toLowerCase().includes("conjured")) {
        const conjured = new Conjured();
        conjured.updateQualityItem(this.items[i]);
        continue;
      }

      if(this.items[i].name === "Aged Brie") {
        new AgedBrie().updateQualityItem(this.items[i]);
        continue;
      }
      if(this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        new SulfurasHandofRagnaros().sulfarasQuality(this.items[i]);
        continue;
      }
      if(this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        new BackstagepassestoaTAFKAL80ETCconcert().updateQualityItem(this.items[i]);
        continue;
      }
      new GenericItem().updateQualityItem(this.items[i]);
      continue;
    }
    return this.items;
  }
}
module.exports = Shop;