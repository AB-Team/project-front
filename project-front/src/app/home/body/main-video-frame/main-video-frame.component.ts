import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyVideo } from 'src/app/models/MyVideo';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private _sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/"+this.myVideo.id);
    this.title = this.myVideo.title;
    this.author = this.myVideo.author;
    this.views = this.myVideo.community['statistics']['views'];
    this.thumbnail = this.myVideo.thumbnail;
  }

  onClick(){
    this.router.navigate(['/videoplayback'], {queryParams: {'url': this.url, 'title': this.title}});
  }

}
