import {Component, OnInit} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {LocatorService} from "../locator.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  contentString: any = '';
  map: any = null;

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAGtq9SspbirAym3DYUeCIoP6oGcl6P8yw',
    })


    loader.load().then(() => {
      this.map = new google.maps.Map(<HTMLElement>document.getElementById("map"), {
        center: {lat: 31.136906, lng: -97.433624}, //Needs to pass actual user location
        zoom: 9,


      })

    })
    }


  constructor(private locator: LocatorService) {
    this.locator.getUserLocation().subscribe((data: any) => {
        const contentString = "<h1>{{data}}</h1>";
      console.log(data);
      data.results.forEach((marker: any) => {

        new google.maps.Marker({
          position: marker.geometry.location,
          map: this.map,
          title: marker.name,
        });
         marker = new google.maps.Marker({
          position: {lat: 31.136906, lng: -97.433624},//not using the actual variable
          map: this.map,
        });

        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map:this.map,
            shouldFocus: false,
          });
        });

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });


      })
    })
  }
}

