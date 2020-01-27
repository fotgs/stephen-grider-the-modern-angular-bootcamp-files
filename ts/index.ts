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
class Car {
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

const myCar = new Car("red", 2000);
myCar.drive();
