const QualityParams = require('./qualityParams');

class Conjured extends QualityParams {
    updateQualityItem(item) {
      let lessQuality;
      if(item.sellIn < 1) {
        lessQuality = 4;
      } else {
      lessQuality = 2;}
      const currentQuality = item.quality - lessQuality;
      this.changeQuality(item, currentQuality);
    }
}

module.exports = Conjured;