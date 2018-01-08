import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';



@Injectable()
export class LoginService {
  private baseurl = 'http://localhost:8181/login';
  // private token: string;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ',
      'username': username,
      'password': password
    });

    return this.http.post(this.baseurl, null, {headers: headers})
      .subscribe((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json();
        if (token) {

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          console.log(token);
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
      // .subscribe((response: Response) => {
      //   return response.json();
      // });
  }


  // subscribe(
  //   res => {
//   console.log(res);
// },
// error => {
//   console.log(error);
// }
// );
}
