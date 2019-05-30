import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'pgn-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person?: Person;

  constructor() { }

  ngOnInit() {
  }

  get firstName(): string {
    if (this.person && this.person.name) {
      return this.titleCase(this.person.name.first);
    }
    return '';
  }

  private titleCase(text: string): string {
    return `${text[0].toUpperCase()}${text.slice(1)}`;
  }
}
