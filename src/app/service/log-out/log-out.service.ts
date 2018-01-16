import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LogOutService {
  private baseurlLogOut = 'http://localhost:8181/logout';

  constructor(private http: HttpClient) {
  }

  logOut() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });

    return this.http.post(this.baseurlLogOut, null, {headers: headers, observe: 'response'});
  }
}
