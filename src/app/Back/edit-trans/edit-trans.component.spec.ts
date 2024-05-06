import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransComponent } from './edit-trans.component';

describe('EditTransComponent', () => {
  let component: EditTransComponent;
  let fixture: ComponentFixture<EditTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
