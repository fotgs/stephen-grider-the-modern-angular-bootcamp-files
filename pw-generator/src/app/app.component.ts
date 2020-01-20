import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  length = 0;
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    this.password = "new password";
    console.log(`
    Include Letters: ${this.includeLetters};
    Include Numbers: ${this.includeNumbers};
    Include Symbols: ${this.includeSymbols};
    `);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0;
    }
  }
}
