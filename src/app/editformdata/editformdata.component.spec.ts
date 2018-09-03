import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformdataComponent } from './editformdata.component';

describe('EditformdataComponent', () => {
  let component: EditformdataComponent;
  let fixture: ComponentFixture<EditformdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
