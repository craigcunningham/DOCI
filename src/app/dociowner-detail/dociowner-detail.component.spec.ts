import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DociownerDetailComponent } from './dociowner-detail.component';

describe('DociownerDetailComponent', () => {
  let component: DociownerDetailComponent;
  let fixture: ComponentFixture<DociownerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DociownerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DociownerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
