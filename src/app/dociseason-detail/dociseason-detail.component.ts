import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

import { DociSeason } from '../dociseason';
import { MessageService } from '../message.service';
import { DociSeasonService } from '../dociseason.service';

@Component({
  selector: 'app-dociseason-detail',
  templateUrl: './dociseason-detail.component.html',
  styleUrls: ['./dociseason-detail.component.css']
})
export class DociSeasonDetailComponent implements OnInit {
  @Input() season: DociSeason;

  constructor(
    private route: ActivatedRoute,
    private dociSeasonService: DociSeasonService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSeason();
  }

  getSeason(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      this.season = new DociSeason();
    }  else {
      this.dociSeasonService.getDociSeason(id)
      .subscribe(season => this.season = season);
    }
  }

  save(): void {
    if (this.season.id) {
      this.dociSeasonService.updateDociSeason(this.season)
      .subscribe(() => this.goBack());
    } else {
      this.messageService.add('Season Added');
      this.dociSeasonService.addDociSeason(this.season as DociSeason)
      .subscribe();
    }
  }

  goBack(): void {
    this.location.back();
  }


}
