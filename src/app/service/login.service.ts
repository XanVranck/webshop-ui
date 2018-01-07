import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  private baseurl = 'http://localhost:8181/user/login';

  constructor(private http: HttpClient) { }

  login(user: User) {
    const header = new HttpHeaders({
      'Authorization': 'Bearer ' + btoa(user.username + ':' + user.password)
    });

    return this.http.post(this.baseurl, {headers: header});
  }
}
