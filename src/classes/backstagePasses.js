const QualityParams = require('./qualityParams');

class BackstagepassestoaTAFKAL80ETCconcert extends QualityParams {
    updateQualityItem(item) {
      let currentQuality = item.quality + 1
      if(item.sellIn < 1)
        currentQuality = 0;
      else if(item.sellIn <= 5) {
        currentQuality = item.quality + 3;
      } else if(item.sellIn <= 10) {
        currentQuality = item.quality + 2;
      }
      item.sellIn -= 1;
      return this.changeQuality(item, currentQuality);
    }
}

module.exports = BackstagepassestoaTAFKAL80ETCconcert;