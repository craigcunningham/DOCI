import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DociTeam } from './dociteam';
import { MessageService } from './message.service';
import { containerRefreshStart } from '@angular/core/src/render3/instructions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DociTeamService {
  private dociTeamsUrl = 'api/dociTeams';

  getDociTeams(): Observable<DociTeam[]> {
    this.messageService.add('DociTeamService: fetched DociTeams');
    return this.http.get<DociTeam[]>(this.dociTeamsUrl)
        .pipe(
          tap(DociTeams => this.log('fetched DociTeams')),
          catchError(this.handleError('getDociTeams', []))
          );
  }

  getDociTeam(id: number): Observable<DociTeam> {
    this.messageService.add(`DociTeamService: fetched DociTeam id=${id}`);
    const url = `${this.dociTeamsUrl}/${id}`;
    return this.http.get<DociTeam>(url).pipe(
      tap(_ => this.log(`fetched DociTeam id=${id}`)),
      catchError(this.handleError<DociTeam>(`getDociTeam id=${id}`))
    );
  }

  updateDociTeam(dociTeam: DociTeam): Observable<any> {
    return this.http.put(this.dociTeamsUrl, dociTeam, httpOptions).pipe(
      tap(_ => this.log(`updated DociTeam id=${dociTeam.id}`)),
      catchError(this.handleError<any>('updateDociTeam'))
    );
  }

  addDociTeam (dociTeam: DociTeam): Observable<DociTeam> {
    return this.http.post<DociTeam>(this.dociTeamsUrl, DociTeam, httpOptions).pipe(
      tap((DociTeam1: DociTeam) => this.log(`added DociTeam w/ id=${dociTeam.id}`)),
      catchError(this.handleError<DociTeam>('addDociTeam'))
    );
  }

  deleteDociTeam(dociTeam: DociTeam | number): Observable<DociTeam> {
    const id = typeof dociTeam === 'number' ? DociTeam : dociTeam.id;
    const url = `${this.dociTeamsUrl}/${id}`;

    return this.http.delete<DociTeam>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted DociTeam id=${id}`)),
      catchError(this.handleError<DociTeam>('deleteDociTeam'))
    );
  }

  searchDociTeams(term: string): Observable<DociTeam[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<DociTeam[]>(`${this.dociTeamsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found DociTeams matching "${term}"`)),
      catchError(this.handleError<DociTeam[]>('searchDociTeams', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`DociTeamService: ${message}`);
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


