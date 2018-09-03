import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformdataComponent } from './viewformdata.component';

describe('ViewformdataComponent', () => {
  let component: ViewformdataComponent;
  let fixture: ComponentFixture<ViewformdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewformdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewformdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
