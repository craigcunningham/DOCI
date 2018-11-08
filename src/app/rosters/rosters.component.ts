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
     this.messageService.add(`setupData: rosters.team_name: ${this.rosters[this.rosters.length - 1].team_name}`);
     this.messageService.add(`setupData: rosters.team_name: ${this.rosters[0].team_name}`);
     this.messageService.add(`setupData: rosters Count: ${this.rosters.length}`);
     this.localTeams = this.localTeams.sort((team1, team2) => team1.name.localeCompare(team2.name));
      this.rosters = this.rosters.sort((roster1, roster2) => roster1.team_name.localeCompare(roster2.team_name));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.messageService.add(`rosters ngOnChanges`);
//    if (changes.rosters) {
      if (this.teams) {
        this.localTeams = Object.create(this.teams);
      }
      this.setupData();
//    }
  }
}
