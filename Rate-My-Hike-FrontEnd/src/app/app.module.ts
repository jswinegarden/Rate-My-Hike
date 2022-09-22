import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'account', component:AccountComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
