import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as Selectors from '../store/selectors'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAdmin$: Observable<boolean>
  isAdmin: boolean
  constructor(private store: Store<AppState>, private router: Router) {this.isAdmin$ = this.store.select(Selectors.viewAdminUser)
  this.isAdmin$.subscribe(res=>this.isAdmin = res)}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isAdmin) { return true }
      else { 
        // this.router.navigate(['/welcome']);
        return true }
  }
  
}
