import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DociOwnerService } from '../dociowner.service';
import { DociOwner } from '../dociowner';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dociowner-detail',
  templateUrl: './dociowner-detail.component.html',
  styleUrls: ['./dociowner-detail.component.css']
})
export class DociOwnerDetailComponent implements OnInit {
  @Input() owner: DociOwner;

  constructor(
    private route: ActivatedRoute,
    private dociOwnerService: DociOwnerService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getOwner();
  }

  getOwner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      this.owner = new DociOwner();
    } else {
      this.dociOwnerService.getDociOwner(id)
          .subscribe(owner => this.owner = owner);
    }
  }

  save(): void {
    if (this.owner.id) {
      this.dociOwnerService.updateDociOwner(this.owner)
      .subscribe();
    } else {
      this.messageService.add(`name: ${this.owner.name}`);
      this.messageService.add(`email: ${this.owner.email}`);
      this.dociOwnerService.addDociOwner(this.owner as DociOwner)
      .subscribe(o => this.owner = o); // () => this.goBack()
    }
  }


  goBack(): void {
    this.location.back();
  }
}

