class Pirate {
  constructor(name, job, cursed, heinousActs, booty) {
  	this.name = name;
    if(job === undefined) {
  	this.job = 'Scallywag';
    } else {
  	this.job = job; 	
   }
    this.cursed = false;
    this.heinousActs = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
  	this.heinousActs +=1 ;
  	if(this.heinousActs > 2) {
  		this.cursed = true;
  	}
  }
  robShip() {
  	this.booty = 100;
  	return 'YAARRR!';
  }
 }
module.exports = Pirate;

// npm test mythical-creatures/test/pirate-test.js
