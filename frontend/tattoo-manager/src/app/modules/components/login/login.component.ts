import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../../core/models/user_login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  userLogin = this.getEmptyUserLogin();

  getEmptyUserLogin(): UserLogin {
    return new UserLogin('', '');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.userLogin);
    this.userLogin = this.getEmptyUserLogin();
  }
}
