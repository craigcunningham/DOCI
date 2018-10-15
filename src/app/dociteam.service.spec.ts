import { TestBed } from '@angular/core/testing';

import { DociteamService } from './dociteam.service';

describe('DociteamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DociteamService = TestBed.get(DociteamService);
    expect(service).toBeTruthy();
  });
});
