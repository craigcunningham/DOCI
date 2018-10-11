import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DociOwnersComponent } from './dociowners.component';

describe('DociOwnersComponent', () => {
  let component: DociOwnersComponent;
  let fixture: ComponentFixture<DociOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DociOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DociOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
