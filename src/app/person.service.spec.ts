import { TestBed } from '@angular/core/testing';
import { 
  HttpClientTestingModule, 
  HttpTestingController, 
} from '@angular/common/http/testing';

import { PersonService } from './person.service';
import { Person } from './person';

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
    const randomUser: Person = {
      gender: "female",
      name: {
        title: "miss",
        first: "idalina",
        last: "da paz"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/93.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg"
      },
    };
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
