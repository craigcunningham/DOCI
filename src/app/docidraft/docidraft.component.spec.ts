import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocidraftComponent } from './docidraft.component';

describe('DocidraftComponent', () => {
  let component: DocidraftComponent;
  let fixture: ComponentFixture<DocidraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocidraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocidraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
