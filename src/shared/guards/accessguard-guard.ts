import { CanActivateFn } from '@angular/router';
import { RoutePaths } from '../routes';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core'; 
@Injectable({
  providedIn: 'root'
})

export class AccessGuardService {
  constructor(private router: Router) {}

  canActivate(route: any, state: any): boolean {
    // Implement your access logic here
    // For example, check if the user is authenticated
    const isAuthenticated = false; // Replace with actual authentication check

    if (!isAuthenticated) {
      this.router.navigate([RoutePaths.LOGIN]);
      return false;
    }
    return true;
  }
}

export const accessguardGuard: CanActivateFn = (route, state) => {
  const accessGuardService = new AccessGuardService(new Router());
  if (accessGuardService.canActivate(route, state)) {
    return true;
  }
  return false;
};

