import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTransactionsComponent } from './show-transactions.component';

describe('ShowTransactionsComponent', () => {
  let component: ShowTransactionsComponent;
  let fixture: ComponentFixture<ShowTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
