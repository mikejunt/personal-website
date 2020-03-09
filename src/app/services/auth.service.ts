import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username, password) {
    console.log(username,password)
    this.router.navigate(['/admin/'])
  }

  constructor(private router: Router) { }
}
