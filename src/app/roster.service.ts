import { environment } from '../environments/environment';

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
  // private rosterUrl = 'api/rosters';
  private rosterUrl = environment.apiUrl + '/Rosters';
  private rosterId = 3;

  constructor(private http: HttpClient, private messageService: MessageService) {  }

  getRostersBySeason(seasonId: number): Observable<Roster[]> {
    const url = `${this.rosterUrl}/BySeason/${seasonId}`;
//    this.messageService.add(`getRostersBySeason: ${url}, season: ${seasonId}`);
    return this.http.get<Roster[]>(url)
        .pipe(
//          tap(rosters => this.messageService.add(`Rosters Fetched: ${rosters.length}`)),
          catchError(this.handleError('getRosters', []))
          );
  }

  getRosterByTeamAndSeason(teamId: number, seasonId: number): Observable<Roster[]> {
    const url = `${this.rosterUrl}/ByTeamAndSeason/${teamId}/${seasonId}`;
    this.messageService.add(`getRostersByTeamAndSeason: ${url}, team: ${teamId}, season: ${seasonId}`);
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

  addPlayerToTeam (playerToAdd: Player, seasonToAdd: DociSeason, team: DociTeam, dateToAdd: Date): Observable<Roster> {
    const roster: Roster = {id: 0, player_id: playerToAdd.id,
                            season_id: seasonToAdd.id, team_id: team.id,
                            date_added: dateToAdd, position: playerToAdd.position,
                            team_name: team.name, player_name: playerToAdd.name,
                            player_active_ind: true};

    // this.messageService.add(`RosterService(${roster.season_id}): Adding ${roster.player_id} to ${roster.team_id}`);
    return this.http.post<Roster>(this.rosterUrl, roster, httpOptions).pipe(
      // tap(r => this.messageService.add(`RosterService(${r.id}): Added ${r.player_id} to ${r.team_id}`)),
      tap(r => this.messageService.add(`RosterService: Added ${r[0].player_name} to ${r[0].team_name}`)),
      tap(r => r = r[0]),
      catchError(this.handleError<Roster>('addPlayerToTeam'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messageService.add(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
