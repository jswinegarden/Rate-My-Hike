import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
   

    ngOnInit(): void {
      let loader = new Loader({
        apiKey: 'AIzaSyAGtq9SspbirAym3DYUeCIoP6oGcl6P8yw'
      })
  
      loader.load().then(() => {
        console.log('loaded gmaps')
  
        const location = { lat: 51.233334, lng: 	6.783333 }
        
        this.map = new google.maps.Map(<HTMLElement>document.getElementById("map"), {
          center: location,
          zoom: 6,
          
        })
  
        const marker = new google.maps.Marker({
          position: location,
          map: this.map,
        });
      })
    }
  }
