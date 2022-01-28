import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  sendMail(sender): Observable<any>{
    return this.httpClient.post(
      'https://us-central1-bogal-2768c.cloudfunctions.net/contactus',
      JSON.stringify(sender),
      {
        ...httpOptions,
        responseType: 'text'
      }
    );
  }
}
