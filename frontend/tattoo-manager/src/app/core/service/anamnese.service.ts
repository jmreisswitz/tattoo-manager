import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAnamnese } from '../model/anamnese';

@Injectable({
  providedIn: 'root',
})
export class AnamneseService {
  url: string;
  serverRoute = 'anamnese';

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

  getAllAnamneses(): Observable<IAnamnese[]> {
    return this.http
      .get<IAnamnese[]>(this.url)
      .pipe(catchError(this.errorHandler.handleError('getAllAnamneses', [])));
  }
}
