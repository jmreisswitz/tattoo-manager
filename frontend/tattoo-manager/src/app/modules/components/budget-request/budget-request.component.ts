import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetRequestService } from '../../../core/service/budget-request.service';
import { BudgetRequest } from '../../../core/model/budget-request';

@Component({
  selector: 'app-budget-request',
  templateUrl: './budget-request.component.html',
  styleUrls: ['./budget-request.component.css'],
})
export class BudgetRequestComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private budgeRequestService: BudgetRequestService
  ) {}

  userAlias: string | null = '';

  budgetRequest: BudgetRequest = new BudgetRequest(
    '',
    0,
    '',
    '',
    0.0,
    '',
    true,
    ''
  );

  ngOnInit(): void {
    this.userAlias = this.route.snapshot.paramMap.get('userid');
    if (this.userAlias != null) {
      this.budgetRequest.setUserAlias(this.userAlias);
    }
  }

  cleanRequest(): void {
    this.budgetRequest = new BudgetRequest(
      '',
      0,
      '',
      '',
      0.0,
      '',
      true,
      '',
      this.userAlias
    );
  }

  onSubmit(): void {
    this.budgetRequest.setCreationAsNow();
    this.budgeRequestService.sendBudgetRequest(this.budgetRequest);
    this.cleanRequest();
  }
}
