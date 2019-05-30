import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

import { Person } from './person';

export interface ApiResponse {
  results: Person[];
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private randomUserSubject = new ReplaySubject<Person>();
  randomUser$ = this.randomUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  getRandomUser() {
    this.http
      .get<ApiResponse>('https://randomuser.me/api')
      .subscribe((result) => {
        this.randomUserSubject.next(result.results[0]);
      });
  }
}
