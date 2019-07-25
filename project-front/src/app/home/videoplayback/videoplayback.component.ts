import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-videoplayback',
  templateUrl: './videoplayback.component.html',
  styleUrls: ['./videoplayback.component.css']
})
export class VideoplaybackComponent implements OnInit {

  url;
  title: string;

  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer,
    private titleService: Title, private meta: Meta) {}

    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.url = this._sanitizer.bypassSecurityTrustResourceUrl(queryParams.url.replace('SafeValue must use [property]=binding: ', '')
                  .replace(' (see http://g.co/ng/security#xss)', '') + '?autoplay=1');
      console.log(queryParams);
      this.title = queryParams.title;

      this.setTitle(this.title);

      this.meta.updateTag({name: "description", content: this.title});
      this.meta.updateTag({name: "keywords", content: this.title.replace(/ /g, ", ")});
    });
  }
}
