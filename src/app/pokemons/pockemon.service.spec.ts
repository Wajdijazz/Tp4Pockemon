import { TestBed } from '@angular/core/testing';

import { PockemonService } from './pockemon.service';

describe('PockemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PockemonService = TestBed.get(PockemonService);
    expect(service).toBeTruthy();
  });
});
