import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DociTeam } from '../dociteam';
import { Player } from '../player';
import { MessageService } from '../message.service';
import { RosterService } from '../roster.service';
import { DociSeason } from '../dociseason';
import { DociSeasonService } from '../dociseason.service';
import { DociTeamService } from '../dociteam.service';
import { Roster } from '../roster';

@Component({
  selector: 'app-docidraft',
  templateUrl: './docidraft.component.html',
  styleUrls: ['./docidraft.component.css']
})
export class DociDraftComponent implements OnInit {
  @ViewChild('nextButton') nextButton: ElementRef;
  @ViewChild('TeamDrafting') teamDrafting: ElementRef;

  seasonId: number;
  placeHolder = 'Player to Draft';
  currentTeam: DociTeam;
  draftIndex = 0;
  draftInReverseDirection = false;
  season: DociSeason;
  draftOrder: DociTeam[];
  private selectedPlayer: Player;
  rosters: Roster[];
  isDataLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private rosterService: RosterService,
    private dociSeasonService: DociSeasonService,
    private dociTeamService: DociTeamService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.seasonId = +this.route.snapshot.paramMap.get('id');
    this.dociSeasonService.getDociSeason(this.seasonId).subscribe(s => this.season = s);

    this.rosterService.getRosters(this.seasonId)
    .subscribe(r => this.rosters = r );
  }

  saveAndNext(event, playerSelecter, rostersComponent) {
    const team = this.draftOrder[this.draftIndex];
    const player = this.selectedPlayer;
    this.messageService.add(`Adding Player: ${player.name} to ${team.name}`);
    this.rosterService.addPlayerToTeam(player, this.season, team, this.season.initialDate)
      .subscribe(r => this.MarkPlayerAdded(r));

    playerSelecter.clear();
    // rostersComponent.refreshData();

    // This makes it a snake draft
    if (this.draftInReverseDirection) {
      this.draftIndex--;
    } else {
      this.draftIndex++;
    }
    if (this.draftIndex === this.draftOrder.length) {
      this.draftInReverseDirection = true;
      this.draftIndex = this.draftOrder.length - 1;
    } else if (this.draftIndex < 0) {
      this.draftIndex = 0;
      this.draftInReverseDirection = false;
    }
    this.currentTeam = this.draftOrder[this.draftIndex];
  }

  MarkPlayerAdded(r: Roster) {
    // this.messageService.add(`Finished Adding player: ${r.player.name} to ${r.team.name}`);
    this.messageService.add(`Finished Adding player`);
    this.rosters.push(r);
  }

  draftOrderSet(order: DociTeam[]) {
    this.currentTeam = order[0];
    this.draftOrder = order;
    this.messageService.add(`draftOrderSet ${this.currentTeam.name}`);
  }

  playerSelected(player) {
    this.selectedPlayer = player;
    this.nextButton.nativeElement.focus();
  }

}
