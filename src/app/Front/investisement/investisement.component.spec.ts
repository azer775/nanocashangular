import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestisementComponent } from './investisement.component';


describe('InvestmentComponent', () => {
  let component: InvestisementComponent;
  let fixture: ComponentFixture<InvestisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestisementComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
