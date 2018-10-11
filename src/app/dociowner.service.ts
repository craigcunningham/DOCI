import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DociOwner } from './DociOwner';
import { MessageService } from './message.service';
import { containerRefreshStart } from '@angular/core/src/render3/instructions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DociOwnerService {
  private dociOwnersUrl = 'api/dociowners';

  getDociOwners(): Observable<DociOwner[]> {
    this.messageService.add('DociOwnerService: fetched DociOwners');
    return this.http.get<DociOwner[]>(this.dociOwnersUrl)
        .pipe(
          tap(DociOwners => this.log('fetched DociOwners')),
          catchError(this.handleError('getDociOwners', []))
          );
  }

  getDociOwner(id: number): Observable<DociOwner> {
    this.messageService.add(`DociOwnerService: fetched DociOwner id=${id}`);
    const url = `${this.dociOwnersUrl}/${id}`;
    return this.http.get<DociOwner>(url).pipe(
      tap(_ => this.log(`fetched DociOwner id=${id}`)),
      catchError(this.handleError<DociOwner>(`getDociOwner id=${id}`))
    );
  }

  updateDociOwner(dociOwner: DociOwner): Observable<any> {
    return this.http.put(this.dociOwnersUrl, dociOwner, httpOptions).pipe(
      tap(_ => this.log(`updated DociOwner id=${dociOwner.id}`)),
      catchError(this.handleError<any>('updateDociOwner'))
    );
  }

  addDociOwner (dociOwner: DociOwner): Observable<DociOwner> {
    return this.http.post<DociOwner>(this.dociOwnersUrl, DociOwner, httpOptions).pipe(
      tap((DociOwner1: DociOwner) => this.log(`added DociOwner w/ id=${dociOwner.id}`)),
      catchError(this.handleError<DociOwner>('addDociOwner'))
    );
  }

  deleteDociOwner(dociOwner: DociOwner | number): Observable<DociOwner> {
    const id = typeof dociOwner === 'number' ? DociOwner : DociOwner.id;
    const url = `${this.dociOwnersUrl}/${id}`;

    return this.http.delete<DociOwner>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted DociOwner id=${id}`)),
      catchError(this.handleError<DociOwner>('deleteDociOwner'))
    );
  }

  searchDociOwners(term: string): Observable<DociOwner[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<DociOwner[]>(`${this.dociOwnersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found DociOwners matching "${term}"`)),
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

