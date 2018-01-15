import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private navBarComponent: NavBarComponent) { }


  ngOnInit() {
    this.navBarComponent.ngOnInit();
  }
}
