import { TestBed } from '@angular/core/testing';

import { Covid19webService } from './covid19web.service';

describe('Covid19webService', () => {
  let service: Covid19webService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19webService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
