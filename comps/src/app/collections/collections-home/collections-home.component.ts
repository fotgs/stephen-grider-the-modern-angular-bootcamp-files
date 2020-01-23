import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections-home",
  templateUrl: "./collections-home.component.html",
  styleUrls: ["./collections-home.component.css"]
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: "James", age: 24, job: "Designer", employed: true },
    { name: "Alex", age: 28, job: "Frontend Engineer", employed: false },
    { name: "Sara", age: 32, job: "Backend Engineer", employed: true }
  ];

  headers = [
    { key: "employed", label: "Employed" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" }
  ];

  constructor() {}

  ngOnInit() {}
}
