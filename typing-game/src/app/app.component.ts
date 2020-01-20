import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "typing-game";
  sentences = [
    "After the favorable episode",
    "Any opera warps a straight menu",
    "The arrested hobby kisses a soldier",
    "The happy alcohol colors the mechanism."
  ];
  userInput = "";
  randomSentence = lorem.sentence();
  
  onChangeEvent(value: string) {
    this.userInput = value;
  }
}
