import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoframeComponent } from './videoframe.component';

describe('VideoframeComponent', () => {
  let component: VideoframeComponent;
  let fixture: ComponentFixture<VideoframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
