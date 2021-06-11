import { TestBed } from '@angular/core/testing';

import { ComponenthelperService } from './componenthelper.service';

describe('ComponenthelperService', () => {
  let service: ComponenthelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponenthelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
