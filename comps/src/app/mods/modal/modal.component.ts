import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.element.nativeElement.remove();
  }
}
