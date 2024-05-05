import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksfrontComponent } from './packsfront.component';

describe('PacksfrontComponent', () => {
  let component: PacksfrontComponent;
  let fixture: ComponentFixture<PacksfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
