import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DociteamDetailComponent } from './dociteam-detail.component';

describe('DociteamDetailComponent', () => {
  let component: DociteamDetailComponent;
  let fixture: ComponentFixture<DociteamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DociteamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DociteamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
