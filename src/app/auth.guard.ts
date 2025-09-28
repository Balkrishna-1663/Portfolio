import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
      return true; // User is authenticated
    } else {
      // User is not authenticated, redirect to login
      this.router.navigate(['/login']);
      return true;
    }
  }
}
