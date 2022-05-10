import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TecnologiaService } from './tecnologia.service';

describe('TecnologiaService', () => {
  let service: TecnologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TecnologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
