const QualityParams = require('./qualityParams');

class AgedBrie extends QualityParams {
    updateQualityItem(item) {
      const currentQuality = item.quality + 1;
      this.changeQuality(item, currentQuality);
    }
}

module.exports = AgedBrie;