import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: "Beach",
      url:
        "https://images.unsplash.com/photo-1494879540385-bc170b0878a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Park",
      url:
        "https://images.unsplash.com/photo-1523849161192-3a6e717932c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1937&q=80"
    },
    {
      title: "Garden",
      url:
        "https://images.unsplash.com/photo-1548403374-728475ca2813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
    },
    {
      title: "Cafe",
      url:
        "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Beach",
      url:
        "https://images.unsplash.com/photo-1494879540385-bc170b0878a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Park",
      url:
        "https://images.unsplash.com/photo-1523849161192-3a6e717932c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1937&q=80"
    },
    {
      title: "Garden",
      url:
        "https://images.unsplash.com/photo-1548403374-728475ca2813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
    },
    {
      title: "Cafe",
      url:
        "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Beach",
      url:
        "https://images.unsplash.com/photo-1494879540385-bc170b0878a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Park",
      url:
        "https://images.unsplash.com/photo-1523849161192-3a6e717932c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1937&q=80"
    },
    {
      title: "Garden",
      url:
        "https://images.unsplash.com/photo-1548403374-728475ca2813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
    },
    {
      title: "Cafe",
      url:
        "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    }
  ];
}
