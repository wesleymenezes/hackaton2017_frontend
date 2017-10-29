import { TestBed, inject } from '@angular/core/testing';

import { InstanceService } from './instance-service.service';

describe('InstanceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstanceService]
    });
  });

  it('should be created', inject([InstanceService], (service: InstanceService) => {
    expect(service).toBeTruthy();
  }));
});
