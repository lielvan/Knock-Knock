import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCamComponent } from './video-cam.component';

describe('VideoCamComponent', () => {
  let component: VideoCamComponent;
  let fixture: ComponentFixture<VideoCamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
