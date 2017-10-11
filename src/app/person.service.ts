import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  getRandomUser() {
    this.http
        .get('https://randomuser.me/api')
        .subscribe();
  }
}
