import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getRandomUser() {
    this.http.get('https://randomuser.me/api').subscribe();
  }
}
