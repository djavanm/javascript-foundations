class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
 }
 receiveBelief() {
   this.dust += 1;
 }
 believe() {
   this.dust += 10;
 }
 makeDresses(array) {
   for(this.i = 0; this.i < array.length; this.i++) {
     this.clothes.dresses.push(array[this.i]);
   }
 }
 provoke() {
   this.disposition = 'Vengeful';
 }
replaceInfant(object) {
if (this.disposition == 'Vengeful') { 
  object.disposition = 'Malicious';
}
}
}
module.exports = Fairy;

// npm test mythical-creatures/test/fairy-test.js