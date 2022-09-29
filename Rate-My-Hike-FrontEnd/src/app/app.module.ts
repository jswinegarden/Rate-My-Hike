import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateRemoveAddTrailComponent } from './update-remove-add-trail/update-remove-add-trail.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TrailsViewComponent } from './trails-view/trails-view.component';
import { UpdateTrailComponent } from './update-trail/update-trail.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { TrailDetailsComponent } from './trail-details/trail-details.component';


const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'account', component:AccountComponent},
  {path: 'resources', component:ResourcesComponent},
  {path: '', component:HomepageComponent},
  {path: 'trails', component:TrailsViewComponent},
  {path: 'wishlist', component:WishlistComponent},
  {path:'trailsUpdate', component: UpdateRemoveAddTrailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ResourcesComponent,
    HomepageComponent,
    FooterComponent,
    RegisterComponent,
    UpdateRemoveAddTrailComponent,
    HeaderComponent,
    WishlistComponent,
    TrailsViewComponent,
    UpdateTrailComponent,
    TrailDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
