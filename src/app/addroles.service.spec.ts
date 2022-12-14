import { TestBed } from '@angular/core/testing';

import { AddrolesService } from './addroles.service';

describe('AddrolesService', () => {
  let service: AddrolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddrolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
