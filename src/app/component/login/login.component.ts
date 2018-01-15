import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  private navBarComponent: NavBarComponent

  constructor(private loginService: LoginService, private router: Router) { 
    this.navBarComponent = new NavBarComponent();
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (resp) => {
        localStorage.setItem('token', resp.headers.get('Authorization'));
        localStorage.setItem('role', resp.headers.get('Role'));
        localStorage.setItem('isLoggedIn', 'true');
        this.navBarComponent.ngOnInit();
        this.router.navigateByUrl('product-overview');
      },
      (err) => {
        alert(err.error.message);        
        localStorage.setItem('isLoggedIn', 'false');
      }
    );
  }
}
