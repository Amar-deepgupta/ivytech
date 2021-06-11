import { TestBed } from '@angular/core/testing';

import { ComponentloaderService } from './componentloader.service';

describe('ComponentloaderService', () => {
  let service: ComponentloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
