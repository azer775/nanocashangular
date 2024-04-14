import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBackComponent } from './all-back.component';

describe('AllBackComponent', () => {
  let component: AllBackComponent;
  let fixture: ComponentFixture<AllBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
