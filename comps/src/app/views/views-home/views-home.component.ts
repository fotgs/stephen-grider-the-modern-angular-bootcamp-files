import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-home",
  templateUrl: "./views-home.component.html",
  styleUrls: ["./views-home.component.css"]
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { label: "Favorites", value: 22 },
    { label: "Page Views", value: 967 },
    { label: "Users", value: 30 }
  ];

  items = [
    {
      title: "Couch",
      description:
        "This is a great couch, the kind that you would want in your house!",
      image:
        "https://s7d3.scene7.com/is/image/ArtVanFurniture/CONDO-BOL-1528BL-7105-SF?$PDPTILEDESKTOP$"
    },
    {
      title: "Dresser",
      description:
        "This is a great dresser, the kind that you would want in your house!",
      image:
        "https://www.ikea.com/us/en/images/products/hemnes-chest-of-8-drawers__0627346_PE693299_S5.JPG?f=s"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
