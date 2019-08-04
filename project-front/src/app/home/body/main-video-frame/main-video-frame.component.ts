import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyVideo } from 'src/app/models/MyVideo';
import { VideoInfoService } from 'src/app/service/VideoInfoService';

@Component({
  selector: 'mainVideoFrame',
  templateUrl: './main-video-frame.component.html',
  styleUrls: ['./main-video-frame.component.css']
})
export class MainVideoFrameComponent implements OnInit {

  @Input() myVideo: MyVideo;
  title: string;
  views: number;
  author: string;
  thumbnail: string;

  constructor(private router: Router, private videoInfoService: VideoInfoService) {}

  ngOnInit() {
    this.title = this.myVideo.title;
    this.author = this.myVideo.author;
    this.views = this.myVideo.community['statistics']['views'];
    this.thumbnail = this.myVideo.thumbnail;
  }

  onClick(){
    this.videoInfoService.title = this.title;
    this.videoInfoService.isHomePage = false;
    this.router.navigate(['/videoplayback'], {queryParams: {'id': this.myVideo.id}});
  }

}
