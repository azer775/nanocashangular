import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFrontComponent } from './all-front.component';

describe('AllFrontComponent', () => {
  let component: AllFrontComponent;
  let fixture: ComponentFixture<AllFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
