import { TestBed } from '@angular/core/testing';

import { RedSocialService } from './red-social.service';

describe('RedSocialService', () => {
  let service: RedSocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedSocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
