import { Injectable } from '@angular/core';
import { BudgetRequest } from '../model/budget-request';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetRequestService {
  url: string;
  serverRoute = 'budget';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService
  ) {
    this.url =
      environment.backend.url +
      ':' +
      environment.backend.port +
      '/' +
      this.serverRoute +
      '/';
  }

  sendBudgetRequest(request: BudgetRequest): void {
    this.http
      .post<BudgetRequest>(this.url, request)
      .pipe(catchError(this.errorHandler.handleError('sendBudgetRequest', [])))
      .subscribe();
  }

  getBudgetRequests(userAliasRequest: string): Observable<BudgetRequest[]> {
    return this.http
      .get<BudgetRequest[]>(this.url, {
        params: { userAlias: userAliasRequest },
      })
      .pipe(catchError(this.errorHandler.handleError('getBudgetRequest', [])));
  }

  getTotalOfNewBudgetRequests(
    userAliasRequest: string
  ): Observable<number | never[]> {
    return this.http
      .get<number>(this.url + 'getNewBudget', {
        params: { userAlias: userAliasRequest },
      })
      .pipe(catchError(this.errorHandler.handleError('getBudgetRequest', [])));
  }

  setAsNotNew(budget: BudgetRequest): void {
    this.http
      .patch<BudgetRequest>(this.url + 'setAsNotNew/' + budget.id, null)
      .pipe()
      .subscribe();
  }
}
