// class Car {
//   constructor(name, year) {
//     console.log("Kreiranje novog objekta");
//     console.log(name);
//     console.log(year);
//     this.carName = name;
//     this.carYear = year;
//   }
//   getYearOfCar(arg1) {
//     console.log(arg1);
//     console.log(2022 - this.carYear);
//   }
// }

// obj1 = new Car("Ford", 1990);

// obj1.noviProp = "Novi Objekat";

// console.log(obj1);

// obj2 = new Car("Audi", 2000);

// console.log(obj2);

// obj1.getYearOfCar();

// console.log(get.carYear);

// //Boze pomozi

// class Car {
//   constructor(brand, speed) {
//     this.speed = speed;
//     this.brand = brand;
//   }

//   accelerate(value) {
//     this.speed += value;
//   }

//   break(value) {
//     this.break -= value;
//   }
//   describe() {
//     console.log("This car is going", this.speed, "km/h");
//   }
// }

// c1 = new Car("Audi", 300);

// c1.describe;
// c1.accelerate(10);
// c1.break(10);

class tv {
  constructor(brand, channel, volume) {
    this.channel = 1;
    this.volume = 50;
  }
  increase(value) {
    if (this.volume + value <= 100) {
      this.volume += value;
    } else {
      this.volume = 100;
    }
  }
  decrease(value) {
    if (this.volume + value > 0) {
      this.volume + value;
    } else {
      this.volume = 1;
    }
  }

  channelSwitch(value) {
    if (value < 50 && value > 0) {
      this.channel = value;
    }
  }

  resetTv() {
    this.volume = 50;
    this.channel = 1;
  }
}

console.log(tv);
