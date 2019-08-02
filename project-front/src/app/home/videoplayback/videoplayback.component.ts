import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { VideoInfoService } from 'src/app/service/VideoInfoService';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-videoplayback',
  templateUrl: './videoplayback.component.html',
  styleUrls: ['./videoplayback.component.css']
})
export class VideoplaybackComponent implements OnInit {

  url;
  title: string;

  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer,
    private titleService: Title, private meta: Meta,
    private videoInfoService: VideoInfoService) {}

    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }

  ngOnInit() {

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.url = this._sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/"+queryParams.id + '?autoplay=1');
    });

    this.title = this.videoInfoService.title;

    this.setTitle(this.title);

    this.meta.updateTag({name: "description", content: this.title});
    this.meta.updateTag({name: "keywords", content: this.title.replace(/ /g, ", ")});
  }
}
