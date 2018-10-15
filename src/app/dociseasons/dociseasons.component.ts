import { Component, OnInit } from '@angular/core';

import { DociSeason } from '../dociseason';
import { DociSeasonService } from '../dociseason.service';

@Component({
  selector: 'app-dociseasons',
  templateUrl: './dociseasons.component.html',
  styleUrls: ['./dociseasons.component.css']
})
export class DociSeasonsComponent implements OnInit {
  seasons: DociSeason[];

  constructor(private dociSeasonService: DociSeasonService) { }

  ngOnInit() {
    this.getDociSeasons();
  }

  getDociSeasons(): void {
    this.dociSeasonService.getDociSeasons()
        .subscribe(seasons => this.seasons = seasons);
  }

  add(season: DociSeason): void {
    if (!season.name) { return; }
    this.dociSeasonService.addDociSeason(season)
        .subscribe(seasonAdded => {
          this.seasons.push(seasonAdded);
        });
  }

  delete(season: DociSeason): void {
    this.seasons = this.seasons.filter(s => s !== season);
    this.dociSeasonService.deleteDociSeason(season).subscribe();
  }

}
