import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-home",
  templateUrl: "./views-home.component.html",
  styleUrls: ["./views-home.component.css"]
})
export class ViewsHomeComponent implements OnInit {
  stats = {
    favorites: 22,
    pageViews: 967,
    users: 30
  };
  constructor() {}

  ngOnInit() {}
}
