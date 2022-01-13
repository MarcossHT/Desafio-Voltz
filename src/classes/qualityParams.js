class QualityParams {
    minQuality() {
      return 0;
    }
  
    maxQuality() {
      return 50;
    }
  
    changeQuality(item, currentValue) {
      if(currentValue >= this.maxQuality()) {
        item.quality = this.maxQuality();
      } else if(currentValue <= this.minQuality()) {
        item.quality = this.minQuality();
      } 
      item.quality = currentValue;
      item.sellIn -= 1;
    }
}

module.exports = QualityParams;