import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpackComponent } from './formpack.component';

describe('FormpackComponent', () => {
  let component: FormpackComponent;
  let fixture: ComponentFixture<FormpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
