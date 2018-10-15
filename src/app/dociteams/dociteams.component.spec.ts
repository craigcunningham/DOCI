import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DociteamsComponent } from './dociteams.component';

describe('DociteamsComponent', () => {
  let component: DociteamsComponent;
  let fixture: ComponentFixture<DociteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DociteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DociteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
