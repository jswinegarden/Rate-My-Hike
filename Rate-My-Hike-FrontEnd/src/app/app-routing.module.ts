import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateRemoveAddTrailComponent } from './update-remove-add-trail/update-remove-add-trail.component';

const routes: Routes = [
  {path: "home",  component:HomepageComponent, pathMatch: "full"},
  {path:'account', component:AccountComponent},
  {path:'resources', component:ResourcesComponent},
  {path:'trails', component:UpdateRemoveAddTrailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
