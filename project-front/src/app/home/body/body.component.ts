import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MyVideo } from 'src/app/models/MyVideo';
import { Statistics } from 'src/app/models/Statistics';
import { StarRating } from 'src/app/models/StarRating';
import { Community } from 'src/app/models/Community';
import { MyArticle } from 'src/app/models/MyArticle';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public myVideos:MyVideo[] = [];
  public myArticles:MyArticle[] = [];
  public mainVideo:MyVideo;
  public sideVideos:MyVideo[] = [];

  constructor(private _sanitizer: DomSanitizer, private http: HttpClient,
    private titleService: Title, private meta: Meta) {

      this.setTitle("Football Highlights, videos, Transfers, News, Analysis, Community | Half Space");
      this.meta.updateTag({name: "description", content: "Halfspace - latest football news, transfers, videos, highlights, analysis from around the world of football."});
      this.meta.updateTag({name: "keywords", content: "football, videos, highlights, news, transfers, analysis, premier, league,  UEFA, champions, league, community"});
    }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    // prod
    let getVideos = this.http.get('http://34.74.56.246/youtubedata/video/api/all',
                    { responseType: 'json'});

    let getArticles = this.http.get('http://34.74.56.246/articlemapper/v1/article/all', {responseType: 'json'});

    // dev
    // let getVideos = this.http.get('http://localhost:8080/video/api/all',
    //                 { responseType: 'json'});
    //
    // let getArticles = this.http.get('http://localhost:9000/v1/article/all', {responseType: 'json'});

    getVideos.subscribe((response: MyVideo[]) => {
        response.forEach((video) => {
          const stats = video['community']['statistics'];
          const statistics = new Statistics(stats['views']);

          const starRating = video['community']['starRating'];
          const starRatingObject = new StarRating(starRating['count'], starRating['average'],
                              starRating['min'], starRating['max']);

          const community = new Community(starRatingObject, statistics);

          const myVideo = new MyVideo(video['id'], video['title'], video['author']
                        , video['description'], community, video['published']
                        , video['updated'], this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+video['id'])
                        , video['thumbnail']);

          this.myVideos.push(myVideo);
        });
    }, (error) => {
      console.log(error);
    }, () => {
      this.mainVideo = this.myVideos.shift();
      this.sideVideos = this.myVideos.splice(0, 4)
    });

    getArticles.subscribe((response: MyArticle[]) => {

      response.forEach((article) => {

        let description = '<p>' + article.description;

        description = description.replace(/&lt;/g,' <');
        description = description.replace(/&gt;/g,'> ');
        description = description.replace(/&quot;/g, '\"');

        description = description + '... <a target="_blank" href="'
              + article.url +'" >more</a></p>';

        const myArticle = new MyArticle(article.headline, article.source,
          this._sanitizer.bypassSecurityTrustResourceUrl(article.url),
          description, this._sanitizer.bypassSecurityTrustResourceUrl(
            article.imageUrl), article.time);

          this.myArticles.push(myArticle);
      });

    }, (error) => {
      console.log(error);
    }, () => {
    });
  }
}
