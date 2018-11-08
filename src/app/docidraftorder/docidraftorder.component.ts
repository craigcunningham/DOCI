import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';

import { DociTeam } from '../dociteam';
import { DociTeamService } from '../dociteam.service';
import { MessageService } from '../message.service';
import { DragulaService } from 'ng2-dragula';
import { Subject } from 'rxjs';
// import 'rxjs/operator/takeUntil';

@Component({
  selector: 'app-docidraftorder',
  templateUrl: './docidraftorder.component.html',
  styleUrls: ['./docidraftorder.component.css']
})

export class DociDraftOrderComponent implements OnInit, OnDestroy {
  @Output() draftOrderSet = new EventEmitter<DociTeam[]>();
  @Input() currentTeamId: number;

  private destroy$ = new Subject();

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

      this.dragulaService.dropModel('teams')
        .subscribe();

      this.dociTeamService.getDociTeams().subscribe(
      teams => { this.draftOrder = teams;
      this.currentTeam = teams[0];
      this.draftOrderSet.emit(this.draftOrder);
    });
  }

  ngOnInit() {
    this.dragulaService.drop('teams').subscribe(() => {
      this.draftOrderSet.emit(this.draftOrder);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
