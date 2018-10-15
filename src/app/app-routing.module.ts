import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { DociOwnersComponent } from './dociowners/dociowners.component';
import { DociOwnerDetailComponent } from './dociowner-detail/dociowner-detail.component';
import { DociTeamsComponent } from './dociteams/dociteams.component';
import { DociTeamDetailComponent } from './dociteam-detail/dociteam-detail.component';
import { DociSeasonsComponent } from './dociseasons/dociseasons.component';
import { DociSeasonDetailComponent } from './dociseason-detail/dociseason-detail.component';
import { DociDraftComponent } from './docidraft/docidraft.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'dociowner/:id', component: DociOwnerDetailComponent },
  { path: 'dociowners', component: DociOwnersComponent },
  { path: 'dociteams', component: DociTeamsComponent },
  { path: 'dociteam/:id', component: DociTeamDetailComponent },
  { path: 'dociseasons', component: DociSeasonsComponent },
  { path: 'dociseason/:id', component: DociSeasonDetailComponent },
  { path: 'docidraft/:id', component: DociDraftComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
