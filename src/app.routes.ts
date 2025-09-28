import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AuthGuard } from './app/auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
