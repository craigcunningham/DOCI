import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { DociOwner } from '../dociowner';
import { DociOwnerService } from '../dociowner.service';
import { FormControl } from '@angular/forms';
import { MessageService } from '../message.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-dociowner-search',
  templateUrl: './dociowner-search.component.html',
  styleUrls: ['./dociowner-search.component.css']
})
export class DociOwnerSearchComponent implements OnInit {
  @Input() givenOwner: DociOwner;
  @Output() ownerSelected = new EventEmitter<DociOwner>();

  owners$: Observable<DociOwner[]>;
  private searchTerms = new Subject<String>();
  ownerControl: FormControl = new FormControl();

  constructor(private dociOwnerService: DociOwnerService, private messageService: MessageService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  displayFn(owner?: DociOwner): string | undefined {
    return owner ? owner.name : undefined;
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.messageService.add(`option selected: ${event.option.value.name}`);
    this.ownerSelected.emit(event.option.value);
  }

  ngOnInit() {
    if (this.givenOwner) {
      this.messageService.add(`Owner Search Init with owner: ${this.givenOwner.name}`);
      this.ownerControl.setValue(this.givenOwner);
    }
    this.owners$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.dociOwnerService.searchDociOwners(term))
    );
  }
}
