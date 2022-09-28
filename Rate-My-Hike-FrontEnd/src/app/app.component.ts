import { Component } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';
import { RoutingService } from './services/routing.service';
import{LocatorService} from "./locator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Rate-My-Hike';



  constructor(private router: Router, private locator: LocatorService) {
    this.locator.getUserLocation().subscribe(data => {
      console.log(data);
    })
  }

  clickAccount(){
    this.router.navigate(['account']);
  }

  clickResources(){
    this.router.navigate(['resources']);
  }

  clickTrails(){
    this.router.navigate(['trails']);
  }

}
