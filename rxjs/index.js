// JS
const input = document.querySelector("input"); // observable - emits an addEventListener

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
    // event flows through this pipeline created by chaining operators
    map(event => event.target.value),
    map(value => parse.int(value)),
    map(value => {
      if (isNaN(value)) {
        throw new Error("Enter a number!");
      }
      return value;
    })
  );

// argument passed into subscribe is the observer
observable.subscribe({
  next(value) {
    console.log(`Your value is ${value}`);
  },
  error(err) {
    console.error(err.message);
  }
});

// Need to add for this tool, but not in general use.
observable;
