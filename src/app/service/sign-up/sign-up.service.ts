import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../model/user';

@Injectable()
export class SignUpService {
  private baseurl = 'http://localhost:8181/sign-up';

  constructor(private http: HttpClient) {
  }

  signUp(user: User) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ',
      'Content-Type': 'application/json'
    });

    return this.http.post(this.baseurl, user, {headers: headers, observe: 'response'});
  }
}
