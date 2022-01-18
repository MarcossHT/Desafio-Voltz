const QualityParams = require('./qualityParams');

class SulfurasHandofRagnaros {
    sulfarasQuality(item) {
      item.quality = 80;
      item.sellIn -= 1;
    }
}

module.exports = SulfurasHandofRagnaros;