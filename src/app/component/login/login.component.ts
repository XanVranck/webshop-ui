import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (resp) => {
        localStorage.setItem('token', resp.headers.get('Authorization'));
        localStorage.setItem('role', resp.headers.get('Role'));
        this.router.navigateByUrl('/sign-up');
      },
      (err) => {
        alert(err);
      }
    );
  }


}
