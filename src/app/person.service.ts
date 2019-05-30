import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private randomUserSubject = new ReplaySubject();
  randomUser$ = this.randomUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  getRandomUser() {
    this.http.get('https://randomuser.me/api').subscribe();
  }
}
