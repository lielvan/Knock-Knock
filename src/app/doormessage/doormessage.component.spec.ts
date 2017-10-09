import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoormessageComponent } from './doormessage.component';

describe('DoormessageComponent', () => {
  let component: DoormessageComponent;
  let fixture: ComponentFixture<DoormessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoormessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoormessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
