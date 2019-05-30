import { TestBed } from '@angular/core/testing';
import { 
  HttpClientTestingModule, 
  HttpTestingController, 
} from '@angular/common/http/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let httpMock: HttpTestingController;
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(PersonService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call the API', () => {
    service.getRandomUser();

    httpMock.expectOne('https://randomuser.me/api');
  });

  it('should expose the fetched data', done => {
    const randomUser = {};
    service.getRandomUser();

    httpMock
      .expectOne('https://randomuser.me/api')
      .flush({ results: [randomUser] });

    service.randomUser$.subscribe(user => {
      expect(user).toEqual(randomUser);
      done();
    });
  });
});
