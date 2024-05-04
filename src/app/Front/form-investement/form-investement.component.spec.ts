import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormInvestementComponent } from './form-investement.component';



describe('forminvestementcomponent', () => {
  let component: FormInvestementComponent;
  let fixture: ComponentFixture<FormInvestementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInvestementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInvestementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
