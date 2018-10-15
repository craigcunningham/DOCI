import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocidraftorderComponent } from './docidraftorder.component';

describe('DocidraftorderComponent', () => {
  let component: DocidraftorderComponent;
  let fixture: ComponentFixture<DocidraftorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocidraftorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocidraftorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
