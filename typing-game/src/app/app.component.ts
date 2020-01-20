import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "typing-game";
  userInput = "";
  randomWord = "";

  onChangeEvent(value: string) {
    this.userInput = value;
  }
}
