import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCardComponent } from './budget-card.component';

describe('BudgetDetailComponent', () => {
  let component: BudgetCardComponent;
  let fixture: ComponentFixture<BudgetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
