// JS
const input = document.querySelector("input"); // observable

input.addEventListener("input", event => {
  // processing pipeline starts here
  let text = event.target.value; // operator

  text = parseInt(text); // operator

  if (isNaN(text)) {
    throw new Error("You must enter a number"); // operator
  }

  logValue(text);
});

const logValue = value => `This is your number: ${value}`;

// RxJs

const { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement("input");
const container = document.querySelector(".container");
container.appendChild(input);

const observable = fromEvent(input, "input") // similar to adding addEventListener
  .pipe(
    // create the pipe by chaining operator
    map(event => event.target.value),
    map(value => console.log(value))
  );

// Need to add for this tool, but not in general use.
observable;
