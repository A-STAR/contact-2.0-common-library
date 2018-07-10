import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact2CommonLibComponent } from './contact2-common-lib.component';

describe('Contact2CommonLibComponent', () => {
  let component: Contact2CommonLibComponent;
  let fixture: ComponentFixture<Contact2CommonLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contact2CommonLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact2CommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
