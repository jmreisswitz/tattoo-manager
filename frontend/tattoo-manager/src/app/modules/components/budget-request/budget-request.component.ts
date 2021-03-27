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
  ) {
    this.userid = '';
  }

  userid: string | null;
  budgetRequest: BudgetRequest = {
    username: '',
    birth: '',
  };

  ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('userid');
  }

  cleanRequest(): void {
    this.budgetRequest = {
      username: '',
      birth: '',
    };
  }

  onSubmit(): void {
    this.budgeRequestService.sendBudgetRequest(this.budgetRequest);
    this.cleanRequest();
  }
}
