import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
// import { DashboardComponent }  from './dashboard/dashboard.component';
// import { BootstrapComponent }  from './bootstrap/bootstrap-component.component';
import { Error404Component }  from './errors/error404.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: Error404Component },
  { path: 'bootstrap/:id', component: Error404Component },
  { path: 'profile', component: ProfileComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
