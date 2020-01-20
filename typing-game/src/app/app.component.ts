import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  gameOverText = "Success!";
  enteredText = "";
  randomText = lorem.sentence();

  onInput(value: string) {
    this.enteredText = value;
  }
}
