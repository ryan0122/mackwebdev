import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class EmailService {
  private baseUrl = '/api/email';

  constructor(private http: HttpClient) { }

  send(data): Observable<any> {
    return this.http.post(this.baseUrl, data, httpOptions)
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
    return Observable.throw(error || 'Server error');
  }


}
