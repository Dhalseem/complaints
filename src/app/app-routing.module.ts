import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintDashboardComponent } from './complaint-dashboard/complaint-dashboard.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'complaints',
    component: ComplaintDashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'complaints/manage',
    component: ComplaintsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'complaints/new',
    component: ComplaintFormComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
