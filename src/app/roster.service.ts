import { Injectable } from '@angular/core';

import { MessageService } from './message.service';
import { Roster } from './roster';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Player } from './player';
import { DociSeason } from './dociseason';
import { DociTeam } from './dociteam';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private rosterUrl = 'api/rosters';
  private rosterId = 3;

  constructor(private http: HttpClient, private messageService: MessageService) {  }

  getRosters(seasonId: number): Observable<Roster[]> {
    return this.http.get<Roster[]>(this.rosterUrl)
        .pipe(
          tap(rosters => this.messageService.add(`Rosters Fetched: ${rosters.length}`)),
          catchError(this.handleError('getRosters', []))
          );
  }

  getRosterByTeamAndSeason(teamId: number, seasonId: number): Observable<Roster[]> {
    const url = `${this.rosterUrl}/${teamId}/${seasonId}`;
    return this.http.get<Roster[]>(url).pipe(
      catchError(this.handleError<Roster[]>(`getRoster id=${teamId}/${seasonId}`))
    );
  }

  getRoster(id: number): Observable<Roster> {
    const url = `${this.rosterUrl}/${id}`;
    return this.http.get<Roster>(url).pipe(
      catchError(this.handleError<Roster>(`getRoster id=${id}`))
    );
  }

  addPlayerToTeam (playerToAdd: Player, seasonToAdd: DociSeason, teamToAdd: DociTeam, dateToAdd: Date): Observable<Roster> {
    const roster: Roster = {id: this.rosterId++, player: playerToAdd,
                            season: seasonToAdd, team: teamToAdd,
                            dateAdded: dateToAdd};

    this.messageService.add(`RosterService: Adding ${roster.player.name} to ${roster.team.name}`);
    return this.http.post<Roster>(this.rosterUrl, roster, httpOptions).pipe(
      tap(r => this.messageService.add(`RosterService(${r.id}): Added ${r.player.name} to ${r.team.name}`)),
      //tap(r => this.messageService.add(`RosterService: Added ${playerToAdd.name} to ${teamToAdd.name}`)),
      catchError(this.handleError<Roster>('addPlayerToTeam'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
