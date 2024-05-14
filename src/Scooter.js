class Scooter {
  // scooter code here
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.user = user;
      this.station = null;
      console.log('Scooter $({this.serial} rented by ${this.user.name}');
    }else {
      throw new Error(this.isBroken ? 'Scooter needs repair' : 'Scotter needs to charge');
    }
  }

  dock(station) {
    this.user = null;
    this.station = station;
    console.log('Scooter ${this.serial} returned to station ${station}');
  }
  recharge() {
    const timer = setInterval(() => {
      if (this.charge <100) {
        this.charge += 10;
        console.log('Scooter ${this.serial} charge increased to ${this.charge} %');
      }else {
        clearInterval(timer);
      }
    }, 1000);
  }

  requestRepair() {
    setTimeout(() => {
      this.isBroken - false;
      console.log('Scooter ${this.serial} repair completed');
    }, 5000);
  }
}

module.exports = Scooter
