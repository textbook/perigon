import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service: PersonService;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('PersonService', ['getRandomUser']);
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: PersonService, useValue: service }
      ]
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
});
