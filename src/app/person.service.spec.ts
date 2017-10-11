import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import { Person } from './person';

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

    httpMock.expectOne({ url: 'https://randomuser.me/api', method: 'GET' });
  });

  it('should expose the fetched data', done => {
    const randomUser: Person = {
      gender: 'female',
      name: { title: 'miss', first: 'marguerite', last: 'lenselink' },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/89.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/89.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg'
      }
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
