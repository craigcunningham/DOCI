import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DociSeason } from './dociseason';
import { MessageService } from './message.service';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class DociSeasonService {
  //  private dociSeasonsUrl = 'api/dociSeasons';
  private dociSeasonsUrl = environment.apiUrl + '/DociSeasons';

  getDociSeasons(): Observable<DociSeason[]> {
    return this.http.get<DociSeason[]>(this.dociSeasonsUrl)
        .pipe(
          catchError(this.handleError('getDociSeasons', []))
          );
  }

  getCurrentDociSeason(): Observable<DociSeason[]> {
    const url = `${this.dociSeasonsUrl}/GetCurrentSeason`;
    return this.http.get<DociSeason[]>(url)
        .pipe(
          catchError(this.handleError('getDociSeasons', []))
          );
  }

  getDociSeason(id: number): Observable<DociSeason> {
    const url = `${this.dociSeasonsUrl}/${id}`;
    return this.http.get<DociSeason>(url).pipe(
  //    tap((DociSeason1: DociSeason[]) => this.log(`retrieved DociSeason w/ initialDate=${DociSeason1[0].initialDate}`)),
      catchError(this.handleError<DociSeason>(`getDociSeason id=${id}`))
    );
  }

  updateDociSeason(dociSeason: DociSeason): Observable<any> {
    return this.http.put(this.dociSeasonsUrl, dociSeason, httpOptions).pipe(
      tap(_ => this.log(`updated DociSeason id=${dociSeason.id}`)),
      catchError(this.handleError<any>('updateDociSeason'))
    );
  }

  addDociSeason (dociSeason: DociSeason): Observable<DociSeason> {
    return this.http.post<DociSeason>(this.dociSeasonsUrl, dociSeason, httpOptions).pipe(
      tap((DociSeason1: DociSeason) => this.log(`added DociSeason w/ id=${DociSeason1.id}`)),
      catchError(this.handleError<DociSeason>('addDociSeason'))
    );
  }

  deleteDociSeason(dociSeason: DociSeason | number): Observable<DociSeason> {
    const id = typeof dociSeason === 'number' ? DociSeason : dociSeason.id;
    const url = `${this.dociSeasonsUrl}/${id}`;

    return this.http.delete<DociSeason>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted DociSeason id=${id}`)),
      catchError(this.handleError<DociSeason>('deleteDociSeason'))
    );
  }

  searchDociSeasons(term: string): Observable<DociSeason[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<DociSeason[]>(`${this.dociSeasonsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found DociSeasons matching "${term}"`)),
      catchError(this.handleError<DociSeason[]>('searchDociSeasons', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`DociSeasonService: ${message}`);
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
