import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.user = new User(username, password);
    this.loginService.login(this.user).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}
