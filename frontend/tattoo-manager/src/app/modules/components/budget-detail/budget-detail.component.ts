import { Component, Input, OnInit } from '@angular/core';
import { BudgetRequest } from '../../../core/model/budget-request';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css'],
})
export class BudgetDetailComponent implements OnInit {
  @Input() budget?: BudgetRequest;

  constructor() {}

  ngOnInit(): void {}
}
