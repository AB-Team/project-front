import { OnInit } from '@angular/core';
import { Community } from './Community';

export class MyVideo implements OnInit{

  ngOnInit(){}

  constructor(id : string, title : string, author : string, description : string
    , community : Community, published : string, updated : string
    , url, thumbnail: string){

      this.id = id;
      this.title = title;
      this.author = author;
      this.description = description;
      this.community = community;
      this.published = published;
      this.updated = updated;
      this.url = url;
      this.thumbnail = thumbnail;
  }

  private id : string;
  private title : string;
  private author : string;
  private description : string;
  private community : Community;
  private published : string;
  private updated : string;
  private url;
  private thumbnail: string;

  getId(){
    return this.id;
  }

  getTitle(){
    return this.title;
  }

  getAuthor(){
    return this.author;
  }

  getDescription(){
    return this.description;
  }

  getCommunity(){
    return this.community;
  }

  getPublished(){
    return this.published;
  }

  getUpdated(){
    return this.updated;
  }

  getUrl(){
    return this.url;
  }

  getThumbnail(){
    return this.thumbnail;
  }
}
