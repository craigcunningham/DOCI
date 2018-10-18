import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Roster } from '../roster';
import { MessageService } from '../message.service';
import { RosterService } from '../roster.service';
import { DociTeam } from '../dociteam';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit, OnChanges {
  @Input() seasonId: number;
  @Input() rosters: Roster[];
  @Input() teams: DociTeam[];

  localTeams: DociTeam[];

  constructor(private messageService: MessageService, private rosterService: RosterService) { }

  ngOnInit() {
    // this.seasonId = 1;
    this.messageService.add(`Init of Rosters SeasonId: ${this.seasonId}`);
    this.messageService.add(`Init of Rosters rosters: ${this.rosters}`);
    this.setupData();
  }

  setupData() {
    if (this.rosters && this.localTeams) {
      /*
      this.teams = [];
      for (const roster of this.rosters) {
        this.teams.push(roster.team);
      }
      */
      this.localTeams = this.localTeams.sort((team1, team2) => team1.name.localeCompare(team2.name));
      this.rosters = this.rosters.sort((roster1, roster2) => roster1.team.name.localeCompare(roster2.team.name));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rosters) {
      if (this.teams) {
        this.localTeams = Object.create(this.teams);
      }
      this.setupData();
    }
  }
}
