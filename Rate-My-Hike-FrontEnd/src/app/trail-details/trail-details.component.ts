import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trails } from '../model/trails';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-trail-details',
  templateUrl: './trail-details.component.html',
  styleUrls: ['./trail-details.component.css']
})
export class TrailDetailsComponent implements OnInit {
  trail : Trails = this.data;
  trails : Trails[] = [];

  constructor(@Inject(MAT_DIALOG_DATA)private data:any,private dialogRef:MatDialogRef<TrailDetailsComponent>, private routing: RoutingService) { }

  ngOnInit(): void {
  }

  closeTrail(){
    this.dialogRef.close();
  }

}
