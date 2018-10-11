import { Component, OnInit } from '@angular/core';

import { DociOwner } from '../dociowner';
import { DociOwnerService } from '../dociowner.service';
// import { DOCIOwnerDetail } from '../dociowner-detail/dociowner-detail.component';

@Component({
  selector: 'app-dociowners',
  templateUrl: './dociowners.component.html',
  styleUrls: ['./dociowners.component.css']
})

export class DociOwnersComponent implements OnInit {
  owners: DociOwner[];

  constructor(private playerService: DociOwnerService) { }

  ngOnInit() {
    this.getDOCIOwners();
  }

  getDOCIOwners(): void {
    this.DociOwnerService.getPlayers()
        .subscribe(owners => this.owners = owners);
  }

  add(name: string, email: string): void {
    name = name.trim();
    email = email.trim();
    if (!name) { return; }
    this.DociOwnerService.addPlayer({ name } as DociOwner)
        .subscribe(owner => {
          this.owners.push(owner);
        });
  }

  delete(owner: DociOwner): void {
    this.owners = this.owners.filter(o => o !== owner);
    this.DociOwnerService.deletePlayer(owner).subscribe();
  }

}

