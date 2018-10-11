import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { DociOwnersComponent } from './dociowners/dociowners.component';
import { DociOwnerDetailComponent } from './dociowner-detail/dociowner-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'dociowner/:id', component: DociOwnerDetailComponent },
  { path: 'dociowners', component: DociOwnersComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
