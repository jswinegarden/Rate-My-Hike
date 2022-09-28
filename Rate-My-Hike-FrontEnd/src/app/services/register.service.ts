import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  addNewUser(users:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:9001/api/v1/users", users);
  }


}
