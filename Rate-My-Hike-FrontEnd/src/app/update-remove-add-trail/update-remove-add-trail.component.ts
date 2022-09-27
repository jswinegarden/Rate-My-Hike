import { Component, OnInit } from '@angular/core';
import { Trails } from '../model/trails';
import { RoutingService } from '../services/routing.service';
import { TrailService } from '../services/trail.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateTrailComponent } from '../update-trail/update-trail.component';

@Component({
  selector: 'app-update-remove-add-trail',
  templateUrl: './update-remove-add-trail.component.html',
  styleUrls: ['./update-remove-add-trail.component.css']
})
export class UpdateRemoveAddTrailComponent implements OnInit {

  trails: Trails[] = [];
  trail: Trails = new Trails();
  errorMessage : string="";

  goToTrails(){
    this.routingService.goToTrails();
  }

  constructor(private trailService:TrailService, private routingService: RoutingService, private dialog: MatDialog) { }

  ngOnInit() {
    this.trailService.getAllTrails().subscribe({
      next:(trails)=>{
        this.trails = trails;
      }
    })
  }

  addTrail() {
    if(this.trail.id != 0 && this.trail.trailName != "" && this.trail.miles != 0 && this.trail.difficulty != "" && this.trail.description != "") {
      this.trailService.addNewTrail(this.trail).subscribe({
        next:(trail) => {
          this.trails.push(trail);
        },
        error:(errorResponse)=>{
          this.errorMessage = errorResponse.error;
          if (this.errorMessage == "[object Object]") {
            this.errorMessage = "Enter valid information";
          }
        }
      })
    }
  }

  deleteTrail(id:number){
    this.trailService.deleteTrail(id).subscribe({
      error:(message)=>{
        this.trails = this.trails.filter(trail => trail.id != id);
      }
    })
  }

  updateTrail(trail:Trails){
    let trailCopy = Object.assign({}, trail);
    this.dialog.open(UpdateTrailComponent,{
      width: "250px",
      data:trailCopy
    }).afterClosed().subscribe(()=>{this.ngOnInit();})
  }


}

