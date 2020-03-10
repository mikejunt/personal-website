import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as Actions from '../store/actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username, password) {
    this.store.dispatch(Actions.setAdminUser())
    this.router.navigate(['/admin/'])
  }

  constructor(private router: Router, private store: Store<AppState>) { }
}
