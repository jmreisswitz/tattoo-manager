import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetRequest } from '../../../core/model/budget-request';

@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.css'],
})
export class LoginFormPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.userid = '';
  }

  userid: string | null;
  budgetRequest = {
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
    console.log(this.budgetRequest);
    this.cleanRequest();
  }
}
