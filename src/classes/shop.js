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
      }
      if(this.items[i].name !== "Aged Brie" && this.items[i] !== "Sulfuras, Hand of Ragnaros" && this.items[i] !== "Backstage passes to a TAFKAL80ETC concert") {
        const genericItem = new GenericItem();
        genericItem.updateQualityItem(this.items[i]);
      }
      if(this.items[i].name === "Aged Brie") {
        const agedBrie = new AgedBrie();
        agedBrie.updateQualityItem(this.items[i]);
      }
      if(this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        const sulfaras = new SulfurasHandofRagnaros();
        sulfaras.sulfarasQuality(this.items[i]);
      }
      if(this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        const backstage = new BackstagepassestoaTAFKAL80ETCconcert();
        backstage.updateQualityItem(this.items[i]);
      }
    }
  }
}
module.exports = Shop;