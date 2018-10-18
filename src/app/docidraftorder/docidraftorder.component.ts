import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { DociTeam } from '../dociteam';
import { DociTeamService } from '../dociteam.service';
import { MessageService } from '../message.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-docidraftorder',
  templateUrl: './docidraftorder.component.html',
  styleUrls: ['./docidraftorder.component.css']
})

export class DociDraftOrderComponent implements OnInit {
  @Output() draftOrderSet = new EventEmitter<DociTeam[]>();
  @Input() currentTeamId: number;
  // @Input() draftOrder: DociTeam[];

  draftOrder: DociTeam[];
  excludedTeams: DociTeam[];
  currentTeam: DociTeam;

  delete(team: DociTeam): void {
    const index = this.draftOrder.indexOf(team);
    this.draftOrder.splice(index, 1);
  }

  constructor(
    private dociTeamService: DociTeamService,
    private messageService: MessageService,
    private dragulaService: DragulaService) {

      this.dragulaService.dropModel('teams').subscribe(args => { this.messageService.add(args.item); });

      this.dociTeamService.getDociTeams().subscribe(
      teams => { this.draftOrder = teams;
      this.currentTeam = teams[0];
      this.draftOrderSet.emit(this.draftOrder);
    });

  }

  ngOnInit() {
  }
}
