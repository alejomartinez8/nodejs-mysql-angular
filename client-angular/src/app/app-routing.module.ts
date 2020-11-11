import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvisersComponent } from './advisers/advisers.component';
import { UpdateAdviserComponent } from './update-adviser/update-adviser.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'adviser/editar/:id', component: UpdateAdviserComponent },
  { path: 'advisers', component: AdvisersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
