import { Component, OnInit } from "@angular/core";
import { PhotosService } from "../photos.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photoUrl: string;
  constructor(private photos: PhotosService) {}

  getRandomPhoto() {
    this.photos.fetchPhoto().subscribe(url => (this.photoUrl = url));
  }

  ngOnInit() {}
}
