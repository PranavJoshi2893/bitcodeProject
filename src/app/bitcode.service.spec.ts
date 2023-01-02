import { TestBed } from '@angular/core/testing';

import { BitcodeService } from './bitcode.service';

describe('BitcodeService', () => {
  let service: BitcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
