import { TestBed } from '@angular/core/testing';

import { DociownerService } from './dociowner.service';

describe('DociownerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DociownerService = TestBed.get(DociownerService);
    expect(service).toBeTruthy();
  });
});
