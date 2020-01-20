import { Component } from "@angular/core";

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
  randomSentence = this.getRandomSentence();

  onChangeEvent(value: string) {
    this.userInput = value;
  }

  getRandomSentence() {
    let randomIdx = Math.floor(Math.random() * this.sentences.length);
    return this.sentences[randomIdx];
  }
}
