import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  term = "";

  constructor() {}

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.term);
    this.term = "";
  }

  ngOnInit() {}
}
