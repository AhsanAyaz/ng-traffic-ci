import { TestBed, inject } from '@angular/core/testing';

import { TrafficLightService } from './traffic-light.service';

describe('TrafficLightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrafficLightService]
    });
  });

  it('should be created', inject([TrafficLightService], (service: TrafficLightService) => {
    expect(service).toBeTruthy();
  }));
});
