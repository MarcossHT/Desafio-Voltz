const Shop  = require("./classes/shop");
const Item  = require("./classes/item");

const items = [
  new Item("+5 Dexterity Vest", 1, 6),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 0, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 8),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
  new Item("Conjured Mana Cake", 1, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("Desafio Voltz!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}