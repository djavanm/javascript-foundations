class Stark {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    if(this.location === undefined)
    this.location = 'Winterfell';
 }
}
module.exports = Stark;

// npm test mythical-creatures/test/stark-test.js