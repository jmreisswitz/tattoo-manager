import { Injectable } from '@angular/core';
import { BudgetRequest } from '../model/budget-request';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { catchError } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

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
    console.log('Sending to server on :', this.url);
    console.log(request);
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
}
