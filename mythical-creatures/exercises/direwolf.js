class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.location = 'King\'s Landing'
    if(this.home == undefined) {
      this.home = 'Beyond the Wall';
    if (this.size == undefined) {
      this.size = 'Massive';
    }
  }
 }
 protect(stark) {
  this.starksToProtect.push(stark);
  this.location = (stark[location]);
 }
}
module.exports = Direwolf;

// npm test mythical-creatures/test/direwolf-test.js