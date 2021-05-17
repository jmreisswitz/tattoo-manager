import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { environment } from '../../../environments/environment';
import { FinanceRelease } from '../model/finance-release';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FinanceReleaseService {
  private url: string;
  private serverRoute = 'financeRelease';

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

  sendFinanceRelease(
    financeRelease: FinanceRelease,
    userAliasRequest: string
  ): void {
    this.http
      .post<FinanceRelease>(this.url, financeRelease, {
        params: {
          userAlias: userAliasRequest,
        },
      })
      .pipe(catchError(this.errorHandler.handleError('sendFinanceRelease', [])))
      .subscribe();
  }
}
