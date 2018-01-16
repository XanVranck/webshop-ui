import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogOutService } from '../../service/log-out/log-out.service';
import { HttpClient } from '@angular/common/http/src/client';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private logOutService: LogOutService) { 
    localStorage.setItem('isLoggedIn', 'false');
  }

  ngOnInit() {
    this.isLoggedIn();
  }

  navigateToLoginPage() {

  }

  logOut() {
    if(localStorage.getItem('isLoggedIn') === 'false'){
      alert('You are are not logged in!')
    }else{
    this.logOutService.logOut().subscribe(
      (resp) => {
        localStorage.setItem('isLoggedIn', 'false');
        this.ngOnInit();
        localStorage.setItem('token', '');
        localStorage.setItem('role', '');
        this.router.navigateByUrl('product-overview');
      },
      (err) => {
        alert(err.error.message);        
        localStorage.setItem('isLoggedIn', 'true');
      }
    );
  }
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem('isLoggedIn') === 'true'){
      return true;
    }return false;
   
  }

}
