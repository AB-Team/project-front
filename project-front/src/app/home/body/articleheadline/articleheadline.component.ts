import { Component, OnInit, Input } from '@angular/core';
import { MyArticle } from 'src/app/models/MyArticle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'articleheadline',
  templateUrl: './articleheadline.component.html',
  styleUrls: ['./articleheadline.component.css']
})
export class ArticleheadlineComponent implements OnInit {

  @Input() myArticle: MyArticle;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.myArticle.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.myArticle.url);
  }

}
