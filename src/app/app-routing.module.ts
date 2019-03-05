import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'create', component: CreateUserComponent},
  {path: 'users', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
