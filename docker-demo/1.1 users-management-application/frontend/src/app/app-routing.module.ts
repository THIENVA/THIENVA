import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: '', component: UserListComponent
  },
  {
    path: 'user/edit/:id', component: UserEditComponent
  },
  {
    path: '**', component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
