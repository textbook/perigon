import { TestBed } from '@angular/core/testing';
import { 
  HttpClientTestingModule, 
  HttpTestingController, 
} from '@angular/common/http/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call the API', () => {
    const service: PersonService = TestBed.get(PersonService);
    service.getRandomUser();

    httpMock.expectOne('https://randomuser.me/api');
  });
});
