import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomepageComponent},
  {path: 'account', component:AccountComponent},
  {path: 'resources', component:ResourcesComponent}
]

@NgModule({
  declarations: [
    
    LoginComponent,
    AccountComponent,
    ResourcesComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    GoogleMapsModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }