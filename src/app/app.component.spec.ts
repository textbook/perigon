import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { Person } from './person';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service: PersonService;

  const person: Person = {
    gender: 'male',
    name: { title: 'mr', first: 'aiden', last: 'davies' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/11.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/11.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/11.jpg'
    }
  };

  beforeEach(async(() => {
    service = jasmine.createSpyObj('PersonService', ['getRandomUser']);
    service.randomUser$ = Observable.of(person);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: PersonService, useValue: service }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch a random user from the service', () => {
    expect(service.getRandomUser).toHaveBeenCalled();
  });

  it('should pass the person to the child component', () => {
    expect(fixture.nativeElement.querySelector('pgn-person').person)
        .toEqual(person);
  });
});
