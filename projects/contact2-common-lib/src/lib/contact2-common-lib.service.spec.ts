import { TestBed, inject } from '@angular/core/testing';

import { Contact2CommonLibService } from './contact2-common-lib.service';

describe('Contact2CommonLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Contact2CommonLibService]
    });
  });

  it('should be created', inject([Contact2CommonLibService], (service: Contact2CommonLibService) => {
    expect(service).toBeTruthy();
  }));
});
