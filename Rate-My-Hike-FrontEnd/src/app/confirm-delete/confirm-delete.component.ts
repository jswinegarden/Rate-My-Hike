import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trails } from '../model/trails';
import { TrailService } from '../services/trail.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  trail: Trails = this.data;

  constructor(@Inject(MAT_DIALOG_DATA)private data:any,  private dialogRef:MatDialogRef<ConfirmDeleteComponent>, private trailService:TrailService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteTrail(id:number){
    this.trailService.deleteTrail(this.trail.id).subscribe({
      next:()=>{
        this.dialogRef.close();
      }
    })
    this.dialogRef.close();
  }

}
