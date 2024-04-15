import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebackComponent } from './homeback.component';

describe('HomebackComponent', () => {
  let component: HomebackComponent;
  let fixture: ComponentFixture<HomebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
