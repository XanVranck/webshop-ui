import {Component, OnInit} from '@angular/core';
import {SignUpService} from '../../service/sign-up/sign-up.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user: User = {'username': '', 'password': '', 'email': ''};

  constructor(private signUpService: SignUpService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    if (this.user.username !== '' && this.user.password !== ''
      && this.user.email.match('[^@]+@[^@]+\.[a-zA-Z]{2,6}')) {
      this.signUpService.signUp(this.user).subscribe(
        (resp) => {
          console.log(resp);
          this.router.navigateByUrl('/login');
        },
        (err) => {
          alert(err.error.message);
        }
      );
    }
  }
}
