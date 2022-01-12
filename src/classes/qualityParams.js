class QualityParams {
    minQuality() {
      return 0;
    }
  
    maxQuality() {
      return 50;
    }
  
    changeQuality(item, currentValue) {
      if(currentValue <= this.maxQuality() && currentValue >= this.minQuality) {
        return item.quality = currentValue;
      } else if(currentValue <= this.minQuality()) {
        return item.quality = this.minQuality();
      } else if(currentValue >= this.maxQuality()) {
        return item.quality = this.maxQuality();
      };
    }
}

module.exports = QualityParams;