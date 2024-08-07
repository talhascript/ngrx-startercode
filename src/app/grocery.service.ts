import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Grocery } from '../models/grocery.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private apiUrl = 'http://localhost:5000/groceries';

  constructor(private http: HttpClient) {}

  fetchAllGroceries(): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
