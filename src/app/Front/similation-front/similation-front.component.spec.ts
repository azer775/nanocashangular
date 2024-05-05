import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilationFrontComponent } from './similation-front.component';

describe('SimilationFrontComponent', () => {
  let component: SimilationFrontComponent;
  let fixture: ComponentFixture<SimilationFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilationFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilationFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
