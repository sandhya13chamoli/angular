import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IEmployee } from './../interface/iemployee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  _url: string = "/assets/data/employeeData.json";
  constructor(private _http: HttpClient) { }

  getEmployeeDetails(): Observable<IEmployee[]> {
      return this._http.get<IEmployee[]>(this._url)
      .pipe(
        catchError(this.errorHandler)
      )
      
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
