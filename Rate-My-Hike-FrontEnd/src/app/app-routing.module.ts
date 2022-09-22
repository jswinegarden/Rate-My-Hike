import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path:'account', component:AccountComponent},
  {path:'resources', component:ResourcesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
