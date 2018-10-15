import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DociseasonsComponent } from './dociseasons.component';

describe('DociseasonsComponent', () => {
  let component: DociseasonsComponent;
  let fixture: ComponentFixture<DociseasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DociseasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DociseasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
