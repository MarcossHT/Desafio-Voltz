const {expect} = require('chai');
const Shop  = require("../src/classes/shop");
const Item  = require("../src/classes/item");

describe("Regra dos conjurados", function() {

  it("Quando o valor for menor do que 1 qualidade decrementada em 4", function() {
    const gildedRose = new Shop([ new Item("conjured mana cake", 0, 8) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(4);
    expect(gildedRose.items[0].sellIn).to.equal(-1);
  });

  it("Quando o valor for maior do que 0 qualidade decrementada em 2", function() {
    const gildedRose = new Shop([ new Item("conjured mana cake", 1, 8) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(6);
    expect(gildedRose.items[0].sellIn).to.equal(0);
  });


});


describe("Regra do Aged Brie", function() {

  it("A qualidade do Aged Brie aumenta em 1 com o passar dos dias", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(1);
    expect(gildedRose.items[0].sellIn).to.equal(1);
  });

});

describe("Regra dos itens genéricos", function() {

  it("A qualidade dos itens genéricos é decrementada em 1 com o passar dos dias", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 1, 6) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(5);
    expect(gildedRose.items[0].sellIn).to.equal(0);
  });

  it("A qualidade dos itens genéricos a partir de sellIn igual a zero é decrementada em 2", function() {
    const gildedRose = new Shop([ new Item("Elixir of the Mongoose", 0, 7) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(5);
    expect(gildedRose.items[0].sellIn).to.equal(-1);
  });
});


describe("Regra do Sulfuras, item lendário", function() {

  it("A qualidade deste item é 80 e não se altera com o passar dos dias", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(80);
    expect(gildedRose.items[0].sellIn).to.equal(-1);
  });

});

describe("Backstage passes to a TAFKAL80ETC concert", function() {

  it("A qualidade deste item aumenta com o passar dos dias: sellin menor ou igual a 5, qualidade sobe três pontos", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(23);
    expect(gildedRose.items[0].sellIn).to.equal(4);
  });

  it("A qualidade deste item aumenta com o passar dos dias: sellin menor ou igual a 10, qualidade sobe dois pontos", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(22);
    expect(gildedRose.items[0].sellIn).to.equal(9);
  });

  it("A qualidade deste item aumenta com o passar dos dias: sellin menor que 1, a qualidade irá zerar", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(0);
    expect(gildedRose.items[0].sellIn).to.equal(-1);
  });

  it("A qualidade deste item aumenta com o passar dos dias: sellin maior que 10, qualidade sobe um ponto ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20) ]); 
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.be.a('number');
    expect(gildedRose.items[0].sellIn).to.be.a('number');
    expect(gildedRose.items[0].quality).to.equal(21);
    expect(gildedRose.items[0].sellIn).to.equal(10);
  });

});