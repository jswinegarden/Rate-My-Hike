import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trails } from '../model/trails';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TrailService {

  constructor(private httpClient: HttpClient, private authService:AuthService) { }

token:any=this.authService.getToken();

  getAllTrails(){
    return this.httpClient.get<Trails[]>("http://localhost:9001/trail/trails")
    
    // , {
    //   headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    // }
  }

  addNewTrail(trail : Trails){
    return this.httpClient.post<Trails>("http://localhost:9001/trail/addtrail", trail
    // , {
    //   headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    // }
    )
  }

  updateTrail(trail:Trails) {
    return this.httpClient.put<Trails>("http://localhost:9001/trail/edittrail/" + trail.id, trail
    // , {
    //   headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    // }
    )
  }

  deleteTrail(id:number): Observable<any>{
    return this.httpClient.delete("http://localhost:9001/trail/deletetrail/" + id
    // , {
    //   headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    // }
    )
  }

  getTrailById(trail:Trails){
    return this.httpClient.get<Trails>("http://localhost:9001/trails/" + trail.id)
  }
}
