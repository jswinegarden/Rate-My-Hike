import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Trails } from '../model/trails';
import { RoutingService } from '../services/routing.service';
import { TrailService } from '../services/trail.service';
import { TrailDetailsComponent } from '../trail-details/trail-details.component';

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

  constructor(private trailService:TrailService, private dialog:MatDialog, private routingService: RoutingService) { }

  ngOnInit() {
    this.trailService.getAllTrails().subscribe({
      next:(trails)=>{
        this.trails = trails;
      }
    })
  }

  openTrail(trail:Trails){
    let trailCopy = Object.assign({}, trail);
    this.dialog.open(TrailDetailsComponent,{
      width:"800px",
      data:trailCopy
    })
  }
}
