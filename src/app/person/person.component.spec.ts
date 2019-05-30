import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';
import { Person } from '../person';

const person: Person = {
  gender: "male",
  name: {
    title: "monsieur",
    first: "cosimo",
    last: "vincent"
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/1.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg"
  },
}

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    component.person = person;
    fixture.detectChanges();
  });

  it('should display the supplied person', () => {
    expect(fixture.nativeElement.querySelector('.first-name').textContent)
      .toBe('Cosimo');
  });

  it('should display their picture', () => {
    expect(fixture.nativeElement.querySelector('img').src)
      .toBe(person.picture.medium);
  });
});
