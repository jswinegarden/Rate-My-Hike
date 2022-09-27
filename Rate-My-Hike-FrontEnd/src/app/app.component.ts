import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Rate-My-Hike';



  constructor(private router: Router){}

  clickAccount(){
    this.router.navigate(['account']);
  }
  clickResources(){
    this.router.navigate(['resources'])
  }
}