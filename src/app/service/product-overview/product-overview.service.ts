import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductOverviewService {
  private baseurlProdOv = 'http://localhost:8181/image';

  constructor(private http: HttpClient) { }

  public findAllThumbnails() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ',
      'Content-Type': 'application/json'
    });

    return this.http.get(this.baseurlProdOv  + "/getThumbnails", {headers: headers, observe: 'response'});
  }

}
