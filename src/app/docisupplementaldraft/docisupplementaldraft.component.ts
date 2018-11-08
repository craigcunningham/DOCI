import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DociTeam } from '../dociteam';
import { ActivatedRoute } from '@angular/router';
import { DociTeamService } from '../dociteam.service';
import { MessageService } from '../message.service';
import { DociSeasonService } from '../dociseason.service';
import { DociSeason } from '../dociseason';
import { Player } from '../player';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-docisupplementaldraft',
  templateUrl: './docisupplementaldraft.component.html',
  styleUrls: ['./docisupplementaldraft.component.css']
})
export class DociSupplementalDraftComponent implements OnInit {
  @ViewChild('nextButton') nextButton: ElementRef;
  // @ViewChild('selectTeam') teamSelecter: ElementRef;

  teams: DociTeam[];
  season: DociSeason;
  seasonId: number;
  placeHolder = 'Player to Add';
  selectedPlayer: Player;
  selectedTeam: DociTeam;

  constructor(
    private route: ActivatedRoute,
    private dociTeamService: DociTeamService,
    private rosterService: RosterService,
    private dociSeasonService: DociSeasonService,
    private messageService: MessageService) { }

  ngOnInit() {
    // this.seasonId = +this.route.snapshot.paramMap.get('id');
    // if (this.seasonId) {
      this.dociSeasonService.getCurrentDociSeason().subscribe(s => this.SetupData(s[0]));
    // }
  }

  SetupData(season: DociSeason) {
    this.seasonId = season.id;
    this.season = season;
    this.messageService.add(`Supplemental Draft, Season: ${this.seasonId}`);
    this.dociTeamService.getDociTeamsBySeason(this.seasonId).subscribe(t => this.TeamsReturned(t));
  }

  TeamsReturned(t) {
    this.teams = t;
    this.selectedTeam = this.teams[0];
  }

  playerSelected(player) {
    this.selectedPlayer = player;
    this.nextButton.nativeElement.focus();
  }

  saveAndNext(event, playerSelecter) {
    this.messageService.add(`docisupplementaldraft.ts Adding Player: ${this.selectedPlayer.id}`);
    this.messageService.add(`docisupplementaldraft.ts to team: ${this.selectedTeam.id}`);
    this.messageService.add(`docisupplementaldraft.ts for season ${this.season.id}`);
    this.rosterService.addPlayerToTeam(this.selectedPlayer, this.season, this.selectedTeam, this.season.supplementalDate)
      .subscribe();

    this.teams.splice(this.teams.indexOf(this.selectedTeam), 1);

    playerSelecter.clear();
    this.selectedTeam = this.teams[0];
  }

  CompareTeams(team1: DociTeam, team2: DociTeam) {
    return team1.id === team2.id;
  }
}
