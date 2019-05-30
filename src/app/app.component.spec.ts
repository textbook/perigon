import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';

describe('AppComponent', () => {
  let service: jasmine.SpyObj<PersonService>;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('PersonService', ['getRandomUser']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: PersonService, useValue: service }
      ]
    }).compileComponents();
  }));

  it('should fetch a random user from the service', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(service.getRandomUser).toHaveBeenCalled();
  });
});
