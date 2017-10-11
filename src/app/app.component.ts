import { Component, OnInit } from '@angular/core';

import { PersonService } from './person.service';

@Component({
  selector: 'pgn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pgn';

  constructor(private service: PersonService) { }

  ngOnInit(): void {
    this.service.getRandomUser();
  }
}
