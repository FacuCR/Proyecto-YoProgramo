import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RedesService } from './redes.service';

describe('RedesService', () => {
  let service: RedesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RedesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
