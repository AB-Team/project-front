import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleheadlineComponent } from './articleheadline.component';

describe('ArticleheadlineComponent', () => {
  let component: ArticleheadlineComponent;
  let fixture: ComponentFixture<ArticleheadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleheadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
