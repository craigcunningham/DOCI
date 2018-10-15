import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DociTeam } from '../dociteam';
import { Player } from '../player';
import { MessageService } from '../message.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-docidraft',
  templateUrl: './docidraft.component.html',
  styleUrls: ['./docidraft.component.css']
})
export class DociDraftComponent implements OnInit {
  @ViewChild('nextButton') nextButton: ElementRef;

  seasonId: number;
  placeHolder = 'Player to Draft';
  currentTeam: DociTeam;
  draftIndex = 0;
  draftInReverseDirection = false;
  private draftOrder: DociTeam[];
  private selectedPlayer: Player;

  constructor(private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.seasonId = +this.route.snapshot.paramMap.get('id');
  }

  saveAndNext(event, playerSelecter) {
    const team = this.draftOrder[this.draftIndex];
    const player = this.selectedPlayer;
    // Save Roster Spot rosterService.addPlayer(seasonId, team, player);
    this.messageService.add(`Added ${player.name} to ${team.name}`);
    playerSelecter.clear();

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

  draftOrderSet(order: DociTeam[]) {
    this.currentTeam = order[0];
    this.draftOrder = order;
  }

  playerSelected(player) {
    this.selectedPlayer = player;
    this.nextButton.nativeElement.focus();
  }

}
