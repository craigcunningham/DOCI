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
  constructor() { }

  ngOnInit() {
 }
}
