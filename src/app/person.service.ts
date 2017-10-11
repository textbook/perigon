import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Person } from './person';

export interface ApiResponse {
  results: Person[];
}

@Injectable()
export class PersonService {
  private randomUserSubject = new ReplaySubject<Person>();
  randomUser$ = this.randomUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  getRandomUser() {
    this.http
        .get<ApiResponse>('https://randomuser.me/api')
        .subscribe(result => {
          this.randomUserSubject.next(result.results[0]);
        });
  }
}
