import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MyVideo } from 'src/app/models/MyVideo';
import { Statistics } from 'src/app/models/Statistics';
import { StarRating } from 'src/app/models/StarRating';
import { Community } from 'src/app/models/Community';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public source: string = "https://www.youtube.com/embed/i6LIpsgKJTQ";
  public safeSource;
  public url;

  public myVideos:MyVideo[] = [];

  constructor(private _sanitizer: DomSanitizer, private http: HttpClient) {
    this.safeSource = this._sanitizer.bypassSecurityTrustResourceUrl(this.source);
  }

  ngOnInit() {
    let getVideos = this.http.get('http://localhost:8080/youtuberss/api/all',
                    { responseType: 'json'});

    getVideos.subscribe((response: MyVideo[]) => {

        response.forEach((item) => {
          const stats = item['community']['statistics'];
          const statistics = new Statistics(stats['views']);

          const starRating = item['community']['starRating'];
          const starRatingObject = new StarRating(starRating['count'], starRating['average'],
                              starRating['min'], starRating['max']);

          const community = new Community(starRatingObject, statistics);

          const myVideo = new MyVideo(item['id'], item['title'], item['author']
                        , item['description'], community, item['published']
                        , item['updated'], this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+item['id'])
                        , item['thumbnail']);

          this.myVideos.push(myVideo);
        });

    }, (error) => {
      console.log(error);
    });
  }

}
