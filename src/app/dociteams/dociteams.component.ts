import { Component, OnInit } from '@angular/core';

import { DociOwner } from '../dociowner';
import { DociTeam } from '../dociteam';
import { DociTeamService } from '../dociteam.service';

@Component({
  selector: 'app-dociteams',
  templateUrl: './dociteams.component.html',
  styleUrls: ['./dociteams.component.css']
})
export class DociTeamsComponent implements OnInit {
  teams: DociTeam[];

  constructor(private dociTeamService: DociTeamService) { }

  ngOnInit() {
    this.getDOCIOwners();
  }

  getDOCIOwners(): void {
    this.dociTeamService.getDociTeams()
        .subscribe(teams => this.teams = teams);
  }

  add(name: string, owner: DociOwner): void {
    name = name.trim();
    owner = owner;
    if (!name) { return; }
    this.dociTeamService.addDociTeam({ name, owner } as DociTeam)
        .subscribe(team => {
          this.teams.push(team);
        });
  }

  delete(team: DociTeam): void {
    this.teams = this.teams.filter(t => t !== team);
    this.dociTeamService.deleteDociTeam(team).subscribe();
  }

}

