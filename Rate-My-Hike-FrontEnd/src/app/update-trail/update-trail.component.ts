import { Component, Inject, OnInit } from '@angular/core';
import { Trails } from '../model/trails';
import { TrailService } from '../services/trail.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-trail',
  templateUrl: './update-trail.component.html',
  styleUrls: ['./update-trail.component.css']
})
export class UpdateTrailComponent implements OnInit {

  errorMessage = "";
  trail: Trails = this.data;

  constructor(@Inject(MAT_DIALOG_DATA)private data:any,  private dialogRef:MatDialogRef<UpdateTrailComponent>, private trailService:TrailService) { }

  ngOnInit(): void {
  }

  edit(trail:Trails){
this.trailService.updateTrail(this.trail).subscribe({
  next:()=>{
    this.dialogRef.close();
  }
})
  }

}
