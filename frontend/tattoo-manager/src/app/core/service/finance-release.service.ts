import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { environment } from '../../../environments/environment';
import {
  FinanceGroup,
  FinanceRelease,
  FinanceType,
} from '../model/finance-release';
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

  private prepareFinanceReleaseObject(
    financeRelease: FinanceRelease
  ): FinanceRelease {
    switch (financeRelease.type) {
      case FinanceType.EXPENSE: {
        financeRelease.type = 'EXPENSE';
        break;
      }
      case FinanceType.PROFIT: {
        financeRelease.type = 'PROFIT';
        break;
      }
    }

    switch (financeRelease.group) {
      case FinanceGroup.INFRASTRUCTURE: {
        financeRelease.group = 'INFRASTRUCTURE';
        break;
      }
      case FinanceGroup.COURSE: {
        financeRelease.group = 'COURSE';
        break;
      }
      case FinanceGroup.CONSULTANCY: {
        financeRelease.group = 'CONSULTANCY';
        break;
      }
      case FinanceGroup.DRAWING: {
        financeRelease.group = 'DRAWING';
        break;
      }
      case FinanceGroup.MARKETING: {
        financeRelease.group = 'MARKETING';
        break;
      }
      case FinanceGroup.MATERIAL: {
        financeRelease.group = 'MATERIAL';
        break;
      }
      case FinanceGroup.PERSONAL_DEVELOPMENT: {
        financeRelease.group = 'PERSONAL_DEVELOPMENT';
        break;
      }
      case FinanceGroup.TATTOO_JOB: {
        financeRelease.group = 'TATTOO_JOB';
        break;
      }
      case FinanceGroup.SOFTWARE: {
        financeRelease.group = 'SOFTWARE';
        break;
      }
    }

    return financeRelease;
  }

  sendFinanceRelease(
    financeRelease: FinanceRelease,
    userAliasRequest: string
  ): void {
    this.http
      .post<FinanceRelease>(
        this.url,
        this.prepareFinanceReleaseObject(financeRelease),
        {
          params: {
            userAlias: userAliasRequest,
          },
        }
      )
      .pipe(catchError(this.errorHandler.handleError('sendFinanceRelease', [])))
      .subscribe();
  }
}
