import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
   

  title = 'Rate-My-Hike';
  

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyC1prN1bEET8WlNMVP-_r05U9ABMG2mPSQ',
    })

    loader.load().then(() => {
      new google.maps.Map(<HTMLElement>document.getElementById("map"), {
        center: {lat: 31.136906, lng: -97.433624},
        zoom: 15,

      })
    })
  }
}