import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGroupComponent } from './user-group/user-group.component';

const routes: Routes = [
  {
    path: '',
    component: UserGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }