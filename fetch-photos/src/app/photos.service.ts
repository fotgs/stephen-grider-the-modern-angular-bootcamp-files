import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

interface Photo {
  urls: {
    small: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  public fetchPhoto() {
    return this.http
      .get<Photo>(
        `https://api.unsplash.com/photos/random?client_id=a1126cf0ddb56072f8bb5b5d076fc6cd05b6d1af35ebeee9fe078395ef2397cc`
      )
      .pipe(pluck("urls", "small"));
  }
}
