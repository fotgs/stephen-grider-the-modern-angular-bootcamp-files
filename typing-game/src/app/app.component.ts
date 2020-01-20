import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  enteredText = "";
  randomText = lorem.sentence();

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomChar: string, enteredChar: string) {
    if (!enteredChar) {
      return "pending";
    }
    return randomChar === enteredChar ? "correct" : "incorrect";
  }
}
