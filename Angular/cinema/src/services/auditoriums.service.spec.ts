import { TestBed } from '@angular/core/testing';

import { AuditoriumsService } from './auditoriums.service';

describe('AuditoriumsService', () => {
  let service: AuditoriumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditoriumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
