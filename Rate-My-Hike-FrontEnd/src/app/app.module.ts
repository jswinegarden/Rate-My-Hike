import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';

import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ResourcesComponent,
    HomepageComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
