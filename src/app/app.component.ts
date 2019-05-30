import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'pgn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  person$: Observable<Person>;

  constructor(private service: PersonService) {
    this.person$ = this.service.randomUser$;
   }

  ngOnInit() {
    this.service.getRandomUser();
  }
}
