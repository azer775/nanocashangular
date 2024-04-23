import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsComponent } from './add-ins.component';

describe('AddInsComponent', () => {
  let component: AddInsComponent;
  let fixture: ComponentFixture<AddInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
