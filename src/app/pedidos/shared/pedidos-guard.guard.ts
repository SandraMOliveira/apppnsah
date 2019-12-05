import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosGuardGuard implements CanActivate {

  constructor(private router: Router){ }

  canActivate(
    // next: ActivatedRouteSnapshot,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      console.log(route);
      console.log(state);
      
      return true;
  }
  
}
