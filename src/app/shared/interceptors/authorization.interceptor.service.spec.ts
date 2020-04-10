import { TestBed } from '@angular/core/testing';

import { AuthorizationInterceptorService } from './authorization.interceptor.service';

describe('AuthorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorizationInterceptorService = TestBed.get(AuthorizationInterceptorService);
    expect(service).toBeTruthy();
  });
});
