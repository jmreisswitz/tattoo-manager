import { Component, Input, OnInit } from '@angular/core';
import { BudgetRequest } from '../../../core/model/budget-request';
import { BudgetRequestService } from '../../../core/service/budget-request.service';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.css'],
})
export class BudgetCardComponent implements OnInit {
  @Input() budget?: BudgetRequest;

  constructor(private budgetRequestService: BudgetRequestService) {}

  ngOnInit(): void {}

  setAsNotNew(): void {
    if (this.budget != null) {
      this.budgetRequestService.setAsNotNew(this.budget);
      this.budget.isNew = false;
    } else {
      console.log('there is no budget here');
    }
  }
}
