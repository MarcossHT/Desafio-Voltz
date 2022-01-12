const QualityParams = require('./qualityParams');

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

module.exports = AgedBrie;