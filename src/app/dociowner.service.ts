import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DociOwner } from './dociowner';
import { MessageService } from './message.service';
import { containerRefreshStart } from '@angular/core/src/render3/instructions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DociOwnerService {
  private dociOwnersUrl = 'http://localhost:8000/DociOwners';
  // private dociOwnersUrl = 'api/dociOwners';

  getDociOwners(): Observable<string[]> {
    return this.http.get<string[]>(this.dociOwnersUrl)
        .pipe(
          tap(owners => this.messageService.add(`Owners fetched: ${owners[0]}`)),
          catchError(this.handleError('getDociOwners', []))
          );
  }

  getDociOwner(id: number): Observable<DociOwner> {
    const url = `${this.dociOwnersUrl}/${id}`;
    return this.http.get<DociOwner>(url).pipe(
      catchError(this.handleError<DociOwner>(`getDociOwner id=${id}`))
    );
  }

  updateDociOwner(dociOwner: DociOwner): Observable<any> {
    return this.http.put(this.dociOwnersUrl, dociOwner, httpOptions).pipe(
      catchError(this.handleError<any>('updateDociOwner'))
    );
  }

  addDociOwner (dociOwner: DociOwner): Observable<DociOwner> {
    return this.http.post<DociOwner>(this.dociOwnersUrl, dociOwner, httpOptions).pipe(
      catchError(this.handleError<DociOwner>('addDociOwner'))
    );
  }

  deleteDociOwner(dociOwner: DociOwner | number): Observable<DociOwner> {
    const id = typeof dociOwner === 'number' ? DociOwner : dociOwner.id;
    const url = `${this.dociOwnersUrl}/${id}`;

    return this.http.delete<DociOwner>(url, httpOptions).pipe(
      catchError(this.handleError<DociOwner>('deleteDociOwner'))
    );
  }

  searchDociOwners(term: string): Observable<DociOwner[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<DociOwner[]>(`${this.dociOwnersUrl}/?name=${term}`).pipe(
      catchError(this.handleError<DociOwner[]>('searchDociOwners', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`DociOwnerService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}

