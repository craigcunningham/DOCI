import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DociOwnerService } from '../dociowner.service';
import { DociOwner } from '../dociowner';

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
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dociOwnerService.getDociOwner(id)
        .subscribe(owner => this.owner = owner);
  }

  save(): void {
    this.dociOwnerService.updateDociOwner(this.owner)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

