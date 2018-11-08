import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragulaModule } from 'ng2-dragula';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatSelect} from '@angular/material';



import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { DociOwnersComponent } from './dociowners/dociowners.component';
import { DociOwnerDetailComponent } from './dociowner-detail/dociowner-detail.component';
import { DociTeamsComponent } from './dociteams/dociteams.component';
import { DociTeamDetailComponent } from './dociteam-detail/dociteam-detail.component';
import { DociOwnerSearchComponent } from './dociowner-search/dociowner-search.component';
import { DociSeasonsComponent } from './dociseasons/dociseasons.component';
import { DociSeasonDetailComponent } from './dociseason-detail/dociseason-detail.component';
import { DociDraftComponent } from './docidraft/docidraft.component';
import { DociDraftOrderComponent } from './docidraftorder/docidraftorder.component';
import { PlayerAutocompleteComponent } from './player-autocomplete/player-autocomplete.component';
import { RostersComponent } from './rosters/rosters.component';
import { filterRostersByTeamNamePipe } from './rosters-by-team-name';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DociSupplementalDraftComponent } from './docisupplementaldraft/docisupplementaldraft.component';
// import 'rxjs/add/operator/takeUntil';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlayerSearchComponent,
    DociOwnersComponent,
    DociOwnerDetailComponent,
    DociTeamsComponent,
    DociTeamDetailComponent,
    DociOwnerSearchComponent,
    DociSeasonsComponent,
    DociSeasonDetailComponent,
    DociDraftComponent,
    DociDraftOrderComponent,
    PlayerAutocompleteComponent,
    RostersComponent,
    filterRostersByTeamNamePipe,
    DociSupplementalDraftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

    NgDragDropModule.forRoot(),
    DragulaModule.forRoot(),

//    HttpClientInMemoryWebApiModule.forRoot(
//      InMemoryDataService, { dataEncapsulation: false }
//    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
