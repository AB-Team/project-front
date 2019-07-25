import { Component, OnInit, Input } from '@angular/core';
import { MyVideo } from 'src/app/models/MyVideo';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {
    this.url = this.myVideo.getUrl();
    this.title = this.myVideo.getTitle();
    this.author = this.myVideo.getAuthor();
    this.views = this.myVideo.getCommunity().getStatistics().getViews();
    this.thumbnail = this.myVideo.getThumbnail();
  }

  onClick(){
    console.log('title on click: ' + this.title);
    this.router.navigate(['/videoplayback'], {queryParams: {'url': this.url, 'title': this.title}});
  }
}
