import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvisersComponent } from './advisers/advisers.component';
import { FormAdviserComponent } from './formadviser/formadviser.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addAdviser', component: FormAdviserComponent },
  { path: 'advisers', component: AdvisersComponent },
  { path: 'updateAdviser/:id', component: FormAdviserComponent },
  { path: '**', redirectTo: '/advisers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
