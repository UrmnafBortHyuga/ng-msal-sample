import { TestBed } from '@angular/core/testing';

import { TrackingIDInterceptorService } from './tracking-id.interceptor.service';

describe('TrackingID.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackingIDInterceptorService = TestBed.get(TrackingIDInterceptorService);
    expect(service).toBeTruthy();
  });
});
