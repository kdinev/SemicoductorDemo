import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Semiconductor } from '../models/live-apisemiconductor/semiconductor';
import { TestAggragate } from '../models/live-apisemiconductor/test-aggragate';
import { Test } from '../models/live-apisemiconductor/test';
import { Process } from '../models/live-apisemiconductor/process';
import { Outcome } from '../models/live-apisemiconductor/outcome';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://localhost:7173';

@Injectable({
  providedIn: 'root'
})
export class LiveAPISemiconductorService {
  constructor(
    private http: HttpClient
  ) { }

  public getSemiconductorList(): Observable<Semiconductor[]> {
    return this.http.get<Semiconductor[]>(`${API_ENDPOINT}/Semiconductors`)
      .pipe(catchError(ErrorHandlerService.handleError<Semiconductor[]>('getSemiconductorList', [])));
  }

  public getProcessList(semiconductorId: number): Observable<Process[]> {
    if (!semiconductorId) {
      return of([]);
    }
    return this.http.get<Process[]>(`${API_ENDPOINT}/Processes/semiconductor/${semiconductorId}`)
      .pipe(catchError(ErrorHandlerService.handleError<Process[]>('getProcessList', [])));
  }

  public getTestList(semiconductorId: number): Observable<Test[]> {
    if (!semiconductorId) {
      return of([]);
    }
    return this.http.get<Test[]>(`${API_ENDPOINT}/Tests/semiconductor/${semiconductorId}`)
      .pipe(catchError(ErrorHandlerService.handleError<Test[]>('getTestList', [])));
  }

  public getOutcomeList(testId: number): Observable<Outcome[]> {
    if (!testId) {
      return of([]);
    }
    return this.http.get<Outcome[]>(`${API_ENDPOINT}/Outcomes/test/${testId}`)
      .pipe(catchError(ErrorHandlerService.handleError<Outcome[]>('getOutcomeList', [])));
  }

  public getTestAggragateList(): Observable<TestAggragate[]> {
    return this.http.get<TestAggragate[]>(`${API_ENDPOINT}/Tests/aggregated`)
      .pipe(catchError(ErrorHandlerService.handleError<TestAggragate[]>('getTestAggragateList', [])));
  }
}
