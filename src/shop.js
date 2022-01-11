class QualityParams {
  minQuality() {
    return 0;
  }

  maxQuality() {
    return 50;
  }

  changeQuality(item, currentValue) {
    if(currentValue >= this.maxQuality()) {
      return item.quality = currentValue;
    } else if(currentValue <= this.minQuality()) {
      return item.quality = this.minQuality();
    } return item.quality = currentValue;
  }
}

class GenericItem extends QualityParams {
  updateQualityItem(item) {
    let lessQuality;
    if(item.sellIn < 1) {
      lessQuality = 2;
    } else {lessQuality = 1;}
    const currentQuality = item.quality - lessQuality;
    this.changeQuality(item, currentQuality);
    item.sellIn -= 1;
  }
}


class Conjured extends QualityParams {
  updateQualityItem(item) {
    let lessQuality;
    if(item.sellIn < 1) {
      lessQuality = 4;
    } else {
    lessQuality = 2;}
    const currentQuality = item.quality - lessQuality;
    this.changeQuality(item, currentQuality);
    item.sellIn -= 1;
  }
}

class AgedBrie extends QualityParams {
  updateQualityItem(item) {
    let Quality;
    if(item.sellIn < 1) {
      Quality = 2;
    } else {
      Quality = 1; 
    }
    const currentQuality = item.quality + Quality;
    this.changeQuality(item, currentQuality);
    item.sellIn -= 1;
  }
}


class SulfurasHandofRagnaros extends QualityParams {
  

  sulfarasQuality(item) {
    item.quality = 80;
    item.sellIn -= 1;
  }
}


class BackstagepassestoaTAFKAL80ETCconcert extends QualityParams {
  filter(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }
  updateQualityItem(item) {
    let currentQuality = item.quality + 1
    if(item.sellIn < 1)
      currentQuality = 0;
    else if(item.sellIn <= 5) {
      currentQuality = item.quality + 3;
    } else if(item.sellIn <= 10) {
      currentQuality = item.quality + 2;
    }
    this.changeQuality(item, currentQuality);
    item.sellIn -= 1;
  }
}

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