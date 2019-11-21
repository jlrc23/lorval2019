import { TestBed } from '@angular/core/testing';

import { OptionSelectedService } from './option-selected.service';

describe('OptionSelectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionSelectedService = TestBed.get(OptionSelectedService);
    expect(service).toBeTruthy();
  });
});
