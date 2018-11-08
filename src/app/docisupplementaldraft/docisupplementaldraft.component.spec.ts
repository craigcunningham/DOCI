import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocisupplementaldraftComponent } from './docisupplementaldraft.component';

describe('DocisupplementaldraftComponent', () => {
  let component: DocisupplementaldraftComponent;
  let fixture: ComponentFixture<DocisupplementaldraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocisupplementaldraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocisupplementaldraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
