import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  @Input() stats = {
    favorites: 0,
    pageViews: 0,
    users: 0
  };

  @Input() headers = [];

  constructor() {}

  ngOnInit() {}
}
