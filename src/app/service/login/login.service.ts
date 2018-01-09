import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class LoginService {
  private baseurl = 'http://localhost:8181/login';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ',
      'username': username,
      'password': password,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.baseurl, null, {headers: headers, observe: 'response'})
      .subscribe(
        (resp) => {
          console.log(resp.headers.get('Authorization'));
          localStorage.setItem('Authorization', resp.headers.get('Authorization'));
        },
        (err) => {
          console.log('resp-error');
          console.log(err);
        }
      );
  }
}
