import { Injectable } from '@angular/core';
import { BudgetRequest } from '../model/budget-request';

@Injectable({
  providedIn: 'root',
})
export class BudgetRequestService {
  constructor() {}

  sendBudgetRequest(request: BudgetRequest): void {
    // TODO enviar como um POST para o servidor pela rota <server>/budget-request o budgetRequest
    console.log('Sending to server:');
    console.log(request);
  }
}
