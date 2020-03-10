import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "Mike"
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.username, this.password)
  }

}
