import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideoFrameComponent } from './main-video-frame.component';

describe('MainVideoFrameComponent', () => {
  let component: MainVideoFrameComponent;
  let fixture: ComponentFixture<MainVideoFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVideoFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVideoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
