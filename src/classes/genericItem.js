const QualityParams = require('./qualityParams');

class GenericItem extends QualityParams {
    updateQualityItem(item) {
      let lessQuality;
      if(item.sellIn < 1) {
        lessQuality = 2;
      } else {lessQuality = 1;}
      const currentQuality = item.quality - lessQuality;
      this.changeQuality(item, currentQuality);
    }
}

module.exports = GenericItem;