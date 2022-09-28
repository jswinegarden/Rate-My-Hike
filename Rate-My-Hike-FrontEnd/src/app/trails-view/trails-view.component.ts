import { Component, OnInit } from '@angular/core';
import { Trails } from '../model/trails';
import { RoutingService } from '../services/routing.service';
import { TrailService } from '../services/trail.service';

@Component({
  selector: 'app-trails-view',
  templateUrl: './trails-view.component.html',
  styleUrls: ['./trails-view.component.css']
})
export class TrailsViewComponent implements OnInit {

  trails: Trails[] = [];
  trail: Trails = new Trails();
  errorMessage : string="";

  goToTrails(){
    this.routingService.goToTrails();
  }

  constructor(private trailService:TrailService, private routingService: RoutingService) { }

  ngOnInit() {
    this.trailService.getAllTrails().subscribe({
      next:(trails)=>{
        this.trails = trails;
      }
    })
  }
}
