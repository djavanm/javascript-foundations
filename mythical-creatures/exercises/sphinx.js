class Sphinx {
  constructor() {
    this.riddles = [];
 }
 collectRiddle(riddle) {
   this.riddles.push(riddle);
   if (this.riddles.length > 3) {
     this.riddles.shift();
   }
 }
attemptAnswer(string){
for(this.i=0;this.i<this.riddles.length;this.i++) {
  if(string == this.riddles[this.i].answer) {
    this.riddles.splice([this.i], 1)
  }
}
}
}
module.exports = Sphinx;

// npm test mythical-creatures/test/sphinx-test.js