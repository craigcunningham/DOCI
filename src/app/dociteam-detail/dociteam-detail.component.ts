import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { DociTeamService } from '../dociteam.service';
import { DociTeam } from '../dociteam';
import { DociOwnerService } from '../dociowner.service';
import { DociOwner } from '../dociowner';
import { FormControl } from '@angular/forms';
import { MessageService } from '../message.service';
import { DociOwnerSearchComponent } from '../dociowner-search/dociowner-search.component';

@Component({
  selector: 'app-dociteam-detail',
  templateUrl: './dociteam-detail.component.html',
  styleUrls: ['./dociteam-detail.component.css']
})
export class DociTeamDetailComponent implements OnInit {
  @Input() team: DociTeam;

  constructor(
    private route: ActivatedRoute,
    private dociTeamService: DociTeamService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dociTeamService.getDociTeam(id)
        .subscribe(team => this.team = team);
  }

  save(): void {
    this.messageService.add(`Saving team: ${this.team.id}`);
    this.messageService.add(`with owner: ${this.team.owner.id} - ${this.team.owner.name}`);
    this.dociTeamService.updateDociTeam(this.team)
    .subscribe(() => this.goBack());
  }

  ownerSelected(owner) {
    this.messageService.add('owner selected in DociTeamDetail.');
    this.team.owner = owner;
  }

  goBack(): void {
    this.location.back();
  }
}


