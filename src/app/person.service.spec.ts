import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService]
    });
    service = TestBed.get(PersonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call the API', () => {
    service.getRandomUser();

    httpMock.expectOne('https://randomuser.me/api');
  });
});
