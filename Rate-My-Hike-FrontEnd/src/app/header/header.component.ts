import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  clickWishlist(){
    this.router.navigate(['wishlist']);
  }

  clickLogin(){
    this.router.navigate(['login']);
  }

  clickUpdateTrails(){
    this.router.navigate(['trailsUpdate']);
  }

  clickHomepage(){
    this.router.navigate(['homepage']);
  }

}
