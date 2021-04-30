import { Component, OnInit } from '@angular/core';
import { BudgetRequest } from '../../../core/model/budget-request';
import { BudgetRequestService } from '../../../core/service/budget-request.service';

@Component({
  selector: 'app-budget-dashboard',
  templateUrl: './budget-dashboard.component.html',
  styleUrls: ['./budget-dashboard.component.css'],
})
export class BudgetDashboardComponent implements OnInit {
  budgetList: BudgetRequest[] = [];
  userAlias = '';

  constructor(private budgetRequestService: BudgetRequestService) {}

  ngOnInit(): void {
    this.userAlias = 'vale';
    this.getBudgetList();
  }

  getBudgetList(): void {
    this.budgetRequestService
      .getBudgetRequests(this.userAlias)
      .subscribe((budgetList) => (this.budgetList = budgetList));
  }
}
