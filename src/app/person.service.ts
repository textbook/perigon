import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class PersonService {
  private randomUserSubject = new ReplaySubject();
  randomUser$ = this.randomUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  getRandomUser() {
    this.http
        .get('https://randomuser.me/api')
        .subscribe();
  }
}
