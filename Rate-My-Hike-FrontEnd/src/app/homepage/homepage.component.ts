import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // map:Map = new Map();
  // errorMessage = "";

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  
  // const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
  
  // function initMap(): void {
  //   Map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center,
  //     zoom: 8
  //   });
  }