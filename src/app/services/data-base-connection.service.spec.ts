import { TestBed } from '@angular/core/testing';

import { DataBaseConnectionService } from './data-base-connection.service';

describe('DataBaseConnectionService', () => {
  let service: DataBaseConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBaseConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
