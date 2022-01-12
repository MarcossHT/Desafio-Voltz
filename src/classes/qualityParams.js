class QualityParams {
    minQuality() {
      return 0;
    }
  
    maxQuality() {
      return 50;
    }
  
    changeQuality(item, currentValue) {
      if(currentValue >= this.maxQuality()) {
        return item.quality = this.maxQuality();
      } else if(currentValue <= this.minQuality()) {
        return item.quality = this.minQuality();
      } return item.quality = currentValue;
    }
}

module.exports = QualityParams;