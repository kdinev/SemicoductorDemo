import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LiveAPISemiconductorService } from './live-apisemiconductor.service';

describe('LiveAPISemiconductorService', () => {
  let service: LiveAPISemiconductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(LiveAPISemiconductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
