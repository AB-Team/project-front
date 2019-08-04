import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MyVideo } from 'src/app/models/MyVideo';
import { MyArticle } from 'src/app/models/MyArticle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  shrinkHeader: boolean = false;
  dataAvailable: boolean = true;
  articles$: Observable<MyArticle[]>;
  mainVideo: MyVideo[];
  sideVideos: MyVideo[];
  middleVideos: MyVideo[];
  videos$: Observable<MyVideo[]>;

  constructor(private httpClient: HttpClient, private titleService: Title,
    private meta: Meta) {

      this.setTitle("Football Highlights, videos, Transfers, News, Analysis, Community | Half Space");
      this.meta.updateTag({name: "description", content: "Halfspace - latest football news, transfers, videos, highlights, analysis from around the world of football."});
      this.meta.updateTag({name: "keywords", content: "football, videos, highlights, news, transfers, analysis, premier, league,  UEFA, champions, league, community"});
    }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    // prod
    this.videos$ = this.httpClient.get<MyVideo[]>('http://34.74.56.246/services/v1/video/all',
                    { responseType: 'json'}).pipe(map((myvideos) => {
                      this.mainVideo = myvideos.splice(0, 1);
                      this.sideVideos = myvideos.splice(0, 4);
                      this.middleVideos = myvideos.splice(0, 4);
                      this.dataAvailable = false;

                      return myvideos;
                    }));

    this.articles$ = this.httpClient.get<MyArticle[]>('http://34.74.56.246/services/v1/article/all',
                    {responseType: 'json'}).pipe(map((articles) => {
                      articles.forEach((article) => {
                        let description = '<p>' + article.description;

                        description = description.replace(/&lt;/g,' <');
                        description = description.replace(/&gt;/g,'> ');
                        description = description.replace(/&quot;/g, '\"');

                        description = description + '... <a target="_blank" href="'
                              + article.url +'" >more</a></p>';

                        article.description = description;
                      })

                      return articles;
                    }));
  }

}
