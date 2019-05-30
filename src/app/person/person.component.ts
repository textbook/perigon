import { Component, OnInit } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'pgn-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: Person;

  constructor() { }

  ngOnInit() {
  }

}
