import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { RoutingService } from '../services/routing.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User = new User();
  users: User[] = [];
  username = " ";

  constructor(private routingService: RoutingService, private authService: AuthService,private userService: UserService) { }

  ngOnInit() {
    let token = this.authService.getToken();

    this.authService.isValid(token).subscribe({next:(response)=>{
      
      let userid = response['userid'];
      console.log("Response: "+response['userid']);
      console.log("User ID: "+this.user.id);
      console.log("username: " + this.user.username);
      console.log("Local Storage ID: " + localStorage.getItem('username'));

      this.userService.getUserByName(this.user);

    this.userService.getUserById(userid).subscribe({
      next:(user)=>{
        console.log(user)
        this.user = user;
      }
    })
  }})
}

  account(){
    this.routingService.goToAccount();
  }
}
