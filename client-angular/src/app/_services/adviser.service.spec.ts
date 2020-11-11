import { TestBed } from '@angular/core/testing';

import { AdviserService } from './adviser.service';

describe('AdviserService', () => {
  let service: AdviserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
