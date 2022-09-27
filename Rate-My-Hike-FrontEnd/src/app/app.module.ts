import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { HomepageComponent } from './homepage/homepage.component';
import { UpdateRemoveAddTrailComponent } from './update-remove-add-trail/update-remove-add-trail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomepageComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'account', component:AccountComponent},
  {path: 'resources', component:ResourcesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ResourcesComponent,
    HomepageComponent,
    NavbarComponent,
    RegisterComponent,
    UpdateRemoveAddTrailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }