import { TestBed } from '@angular/core/testing';
import { BilanProvissionnelService } from './BilanProvissionnel.service';


describe('BilanProvissionnel', () => {
  let service: BilanProvissionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilanProvissionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});