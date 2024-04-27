import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormloanComponent } from './formloan.component';

describe('FormloanComponent', () => {
  let component: FormloanComponent;
  let fixture: ComponentFixture<FormloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
