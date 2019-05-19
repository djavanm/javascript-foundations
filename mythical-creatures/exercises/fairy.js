class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris', ]};
 }
 receiveBelief() {
   this.dust += 1;
 }
 believe() {
   this.dust += 10;
 }
 makeDresses(array) {
   this.clothes.dresses.push(array);
 }
}
module.exports = Fairy;

// npm test mythical-creatures/test/fairy-test.js