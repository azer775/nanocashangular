import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInsComponent } from './show-ins.component';

describe('ShowInsComponent', () => {
  let component: ShowInsComponent;
  let fixture: ComponentFixture<ShowInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
