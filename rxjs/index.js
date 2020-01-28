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
const { map, pluck } = RxOperators;

const input = document.createElement("input");
const container = document.querySelector(".container");
container.appendChild(input);

const observable = fromEvent(input, "input") // similar to adding addEventListener
  .pipe(
    // event flows through this pipeline created by chaining operators
    pluck("target", "value"),
    map(value => parseInt(value)),
    map(value => {
      if (isNaN(value)) {
        throw new Error("Enter a number!");
      }
      return value;
    })
  );

observable.subscribe({
  // argument passed into subscribe is the observer
  next(value) {
    console.log(`Your value is ${value}`);
  },
  error(err) {
    console.error(err.message);
  }
});

// Need to add for this tool, but not in general use.
observable;

// low-level observables

const { Observable } = Rx;

const observable = new Observable(subscriber => {
  // throw the value 1 into our pipeline
  subscriber.next(1);

  // observable is complete, no more values will come out
  subscriber.complete();

  // emit an error, no more values will come out
  subscriber.error(new Error(""));
});

// ver 1
observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Observable is complete");
  },

  error(err) {
    console.log(err.message);
  }
});

observable;

// ver 2
observable.subscribe(
  value => console.log(value), // next
  err => console.log(err), // error
  () => console.log("COMPLETE") // completion
);
