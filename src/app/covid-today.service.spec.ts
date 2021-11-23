import { TestBed } from '@angular/core/testing';

import { CovidTodayService } from './covid-today.service';

describe('CovidTodayService', () => {
  let service: CovidTodayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidTodayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
