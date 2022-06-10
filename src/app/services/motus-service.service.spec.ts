import { TestBed } from '@angular/core/testing';

import { MotusServiceService } from './motus-service.service';

describe('MotusServiceService', () => {
  let service: MotusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
