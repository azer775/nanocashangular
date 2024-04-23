import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsComponent } from './edit-ins.component';

describe('EditInsComponent', () => {
  let component: EditInsComponent;
  let fixture: ComponentFixture<EditInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
