// Typescript ONLY helps you catch errors during development.

// TYPE ANNOTATION - 6 types
const myName: string = "Annie";

const ten: number = 10;
const negative: number = -100;
const decimal: number = 10.01;

const isNull: null = null;
const isUndefined: undefined = undefined;

const isBool: boolean = false;
const isAny: any = true;

// TYPE INFERENCE - only works when a variable is declared AND initialized

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const joinStrings = (a: string, b: string): string => {
  return a + b;
};

// objects
const post: { a: number; b: string; c: boolean } = {
  a: 1,
  b: "cool",
  c: false
};

// long way to describe object type
const printPost1 = (post: { a: number; b: string; c: boolean }) => {
  return post;
};

// INTERFACE - creates a custom type

interface Post {
  a: number;
  b: string;
  c: boolean;
}

// use interface
const printPost2 = (post: Post) => {
  return post;
};

// CLASSES
class Car1 {
  //   color = "red";
  //   year = 2000;

  //   constructor() {
  //     this.color = color;
  //     this.year = year;
  //   }

  color: string;
  year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    console.log("Vroom");
  }
}

const myCar = new Car1("red", 2000);
myCar.drive();

// private and public (can be accessed outside of the class)
class Car2 {
  //   color: string;
  //   private year: number;

  constructor(color: string, private year: number) {
    // this.color = color;
    // this.year = year;
  }

  drive() {
    console.log(this.year);
    console.log("Vroom");
  }

  private turnWheel() {
    console.log("Turn");
    console.log("This method is not available outside.");
  }
}

// DECORATORS - currently experimental, not 100% supported by default
// need to create a config file using CLI
// functions that ONLY get called when the file first executes
// can be applied to a class, property, method, accessor, agruments
// used to test the inner workings of classes

// plain decorator
const Component = (target: any) => {
  console.log(target);
};

// factory decorators must return a function and be called with parenthesis

@Component
class Car3 {
  @Component year: string;

  @Component
  drive(@Component speed: number) {
    console.log("Drive");
  }
}
