const QualityParams = require('./qualityParams');

class BackstagepassestoaTAFKAL80ETCconcert extends QualityParams {
    updateQualityItem(item) {
      let quality;
      if(item.sellIn <= 5) {
        quality = 3;
      } else if(item.sellIn <= 10) {
        quality = 2;
      } else {
        quality = 1;
      }
      const currentQuality = item.sellIn < 1 ? 0: item.quality + quality;
      this.changeQuality(item, currentQuality);
    }
}

module.exports = BackstagepassestoaTAFKAL80ETCconcert;