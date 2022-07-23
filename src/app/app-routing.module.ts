import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintDashboardComponent } from './complaint-dashboard/complaint-dashboard.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'complaints', component: ComplaintDashboardComponent },
  {
    path: 'complaints/manage',
    component: ComplaintsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'complaints/new',
    component: ComplaintFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
