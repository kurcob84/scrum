import { TestBed, inject } from '@angular/core/testing';

import { BearerTokenInterceptorService } from './bearer-token-interceptor.service';

describe('BearerTokenInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BearerTokenInterceptorService]
    });
  });

  it('should be created', inject([BearerTokenInterceptorService], (service: BearerTokenInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
