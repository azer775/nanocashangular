import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudeDeprojectComponent } from './etude-deproject.component';

describe('EtudeDeprojectComponent', () => {
  let component: EtudeDeprojectComponent;
  let fixture: ComponentFixture<EtudeDeprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudeDeprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudeDeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
