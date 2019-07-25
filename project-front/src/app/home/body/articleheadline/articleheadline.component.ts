import { Component, OnInit, Input } from '@angular/core';
import { MyArticle } from 'src/app/models/MyArticle';

@Component({
  selector: 'articleheadline',
  templateUrl: './articleheadline.component.html',
  styleUrls: ['./articleheadline.component.css']
})
export class ArticleheadlineComponent implements OnInit {

  @Input() myArticle: MyArticle;

  constructor() { }

  ngOnInit() {
  }

}
