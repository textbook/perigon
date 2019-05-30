import { Component, OnInit } from '@angular/core';

import { PersonService } from './person.service';

@Component({
  selector: 'pgn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'perigon';

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.service.getRandomUser();
  }
}
