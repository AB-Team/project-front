import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyVideo } from 'src/app/models/MyVideo';

@Component({
  selector: 'mainVideoFrame',
  templateUrl: './main-video-frame.component.html',
  styleUrls: ['./main-video-frame.component.css']
})
export class MainVideoFrameComponent implements OnInit {

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
    this.router.navigate(['/videoplayback'], {queryParams: {'url': this.url, 'title': this.title}});
  }

}
