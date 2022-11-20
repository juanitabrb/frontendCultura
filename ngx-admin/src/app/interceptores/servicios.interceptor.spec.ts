import { TestBed } from '@angular/core/testing';

import { ServiciosInterceptor } from './servicios.interceptor';

describe('ServiciosInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ServiciosInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ServiciosInterceptor = TestBed.inject(ServiciosInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
