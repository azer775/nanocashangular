import { TestBed } from '@angular/core/testing';
import { InvestisementService } from './investementservice';


describe('InvestisementService', () => {
  let service: InvestisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
