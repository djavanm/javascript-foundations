class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home;
    this.size = size;
    if(this.home == undefined) {
      this.home = 'Beyond the Wall';
    if (this.size == undefined) {
      this.size = 'Massive';
    }
    }
 }
}
module.exports = Direwolf;

// npm test mythical-creatures/test/direwolf-test.js