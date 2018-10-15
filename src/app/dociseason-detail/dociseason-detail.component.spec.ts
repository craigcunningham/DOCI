import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DociseasonDetailComponent } from './dociseason-detail.component';

describe('DociseasonDetailComponent', () => {
  let component: DociseasonDetailComponent;
  let fixture: ComponentFixture<DociseasonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DociseasonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DociseasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
