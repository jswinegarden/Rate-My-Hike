import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService:AuthService) { }
  token :any = this.authService.getToken();
  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:9001/api/v1/users")
  }


  login(user:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:9001/api/v1/users/login", user)
  }
  getUserById(userid:number){
    return this.httpClient.get<User>("http://localhost:9001/api/v1/users/" + userid, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    });
  }
  

}