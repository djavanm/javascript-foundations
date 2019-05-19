class Stark {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    if(this.location === undefined)
    this.location = 'Winterfell';
    this.safe = false;
 }
 houseWords() {
   if (this.safe == true) {
    return 'The North Remembers';
   } else {
   return 'Winter is Coming';
  }
 }
}
module.exports = Stark;

// npm test mythical-creatures/test/stark-test.js