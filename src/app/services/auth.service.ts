import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as Actions from '../store/actions'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username, password) {
    let user = { username: username, password: password }
    this.http.post('/api/auth/login', user).subscribe(res => {
      if (!res[`success`]) { return false }
      this.store.dispatch(Actions.setAdminUser())
      this.router.navigate(['/admin/'])
      return true
    })
  }

  constructor(private router: Router, private store: Store<AppState>, private http: HttpClient) { }
}
