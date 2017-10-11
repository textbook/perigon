import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';
import { Person } from '../person';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  const person: Person = {
    gender: 'female',
    name: { title: 'miss', first: 'jocelaine', last: 'da cruz' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/88.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg'
    }
  };

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
        .toBe('Jocelaine');
  });
});
