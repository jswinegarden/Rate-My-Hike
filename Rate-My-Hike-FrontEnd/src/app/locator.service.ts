import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocatorService {

  constructor(private http: HttpClient) { }

  rootUrl = 'http://localhost:9001/googleGiveMeTrails'

  getUserLocation() {
    return this.http.get(this.rootUrl);
  }

}
