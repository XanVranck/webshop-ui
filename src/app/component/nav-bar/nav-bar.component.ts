import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    this.isLoggedIn();
  }

  navigateToLoginPage() {

  }

  isLoggedIn(): boolean{
    if(localStorage.getItem('isLoggedIn') === 'true'){
      return true;
    }return false;
   
  }

}
