import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { RoutingService } from '../services/routing.service';
import { RegisterService } from '../services/register.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[] = [];
  user : User = new User();

  constructor(private registerService: RegisterService, private router: RoutingService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.registerService.addNewUser(this.user).subscribe({
      next:(addUser)=>{
        this.users.push(addUser)
        console.log(addUser)
        this.router.goToLogin();
      }
    })
  }

  gotoLogin(){
    this.router.goToLogin();
  }

}