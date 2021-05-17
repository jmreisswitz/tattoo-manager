import { TestBed } from '@angular/core/testing';

import { FinanceReleaseService } from './finance-release.service';

describe('FinanceReleaseService', () => {
  let service: FinanceReleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceReleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
