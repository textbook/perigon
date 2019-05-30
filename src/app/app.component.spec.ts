import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { Person } from './person';
import { PersonComponent } from './person/person.component';

const person: Person = {
  gender: "male",
  name: {
    title: "mr",
    first: "ramon",
    last: "nuñez"
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/13.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
  },
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let service: jasmine.SpyObj<PersonService>;
  let subject: Subject<Person>;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('PersonService', ['getRandomUser']);
    subject = new Subject();
    service.randomUser$ = subject.asObservable();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PersonComponent
      ],
      providers: [
        { provide: PersonService, useValue: service }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should fetch a random user from the service', () => {
    expect(service.getRandomUser).toHaveBeenCalled();
  });

  it('should pass the person to the child component', () => {
    subject.next(person);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.first-name').textContent)
      .toBe("Ramon");
  });
});
