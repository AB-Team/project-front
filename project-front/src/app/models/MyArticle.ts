export class MyArticle {

  headline: string;
  source: string;
  url;
  description: string;
  imageUrl;
  time: string;

  constructor(headline: string, source: string, url, description: string,
    imageUrl, time: string){
      this.headline = headline;
      this.source = source;
      this.url = url;
      this.description = description;
      this.imageUrl = imageUrl;
      this.time = time;
    }
}
