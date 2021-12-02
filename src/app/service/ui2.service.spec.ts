import { TestBed } from '@angular/core/testing';

import { Ui2Service } from './ui2.service';

describe('Ui2Service', () => {
  let service: Ui2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ui2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
