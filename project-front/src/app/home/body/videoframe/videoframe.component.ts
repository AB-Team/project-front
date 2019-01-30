import { Component, OnInit, Input } from '@angular/core';
import { MyVideo } from 'src/app/models/MyVideo';

@Component({
  selector: 'videoframe',
  templateUrl: './videoframe.component.html',
  styleUrls: ['./videoframe.component.css']
})
export class VideoframeComponent implements OnInit {

  @Input() myVideo: MyVideo;
  url;
  title: string;
  views: number;
  author: string;
  thumbnail: string;

  constructor() {}

  ngOnInit() {
    this.url = this.myVideo.getUrl();
    this.title = this.myVideo.getTitle();
    this.author = this.myVideo.getAuthor();
    this.views = this.myVideo.getCommunity().getStatistics().getViews();
    this.thumbnail = this.myVideo.getThumbnail();
  }

}
