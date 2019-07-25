import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoplaybackComponent } from './videoplayback.component';

describe('VideoplaybackComponent', () => {
  let component: VideoplaybackComponent;
  let fixture: ComponentFixture<VideoplaybackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoplaybackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoplaybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
