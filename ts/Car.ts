export class Car4 {
  // version 1;
  year: number = 10;

  // version 2
  // constructor() {
  //   this.year = 10;
  // }

  drive(speed: number) {
    console.log(`Driving at ${speed}`);
  }
}

const myCar = new Car4();
console.log(myCar.year);
