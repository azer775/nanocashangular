import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfileComponent } from './testfile.component';

describe('TestfileComponent', () => {
  let component: TestfileComponent;
  let fixture: ComponentFixture<TestfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
