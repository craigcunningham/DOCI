import { TestBed } from '@angular/core/testing';

import { DociseasonService } from './dociseason.service';

describe('DociseasonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DociseasonService = TestBed.get(DociseasonService);
    expect(service).toBeTruthy();
  });
});
