import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';
import { DociOwner } from '../dociowner';
import { DociOwnerService } from '../dociowner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  owners: DociOwner[] = [];

  constructor(
    private playerService: PlayerService,
    private dociOwnerServer: DociOwnerService
    ) { }

  ngOnInit() {
    this.getDociOwners();
  }

  getDociOwners(): void {
    this.dociOwnerServer.getDociOwners()
        .subscribe(owners => this.owners = owners);
  }

}
