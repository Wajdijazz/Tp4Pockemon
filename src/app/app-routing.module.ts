import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { AuthGuardService } from './login/auth-guard.service';

const routes: Routes = [
  { path: 'login', component:  LoginComponent },
  { path: 'team', component:  TeamComponent, canActivate: [AuthGuardService],

  canLoad: [AuthGuardService] },


  
           


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
