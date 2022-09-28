
import {Component,OnInit/*
ViewChild*/} from '@angular/core';
 import {Loader} from "@googlemaps/js-api-loader";
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAGtq9SspbirAym3DYUeCIoP6oGcl6P8yw',
    })



    loader.load().then(() => {
      new google.maps.Map(<HTMLElement>document.getElementById("map"), {
        center: {lat: 31.136906, lng: -97.433624},
        zoom: 15,

      })
    })
  }
  }
