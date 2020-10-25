import { TestBed } from '@angular/core/testing';

import { JikanSearchService } from './jikan-search.service';

describe('JikanSearchService', () => {
  let service: JikanSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JikanSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
