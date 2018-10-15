import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DociownerSearchComponent } from './dociowner-search.component';

describe('DociownerSearchComponent', () => {
  let component: DociownerSearchComponent;
  let fixture: ComponentFixture<DociownerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DociownerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DociownerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
