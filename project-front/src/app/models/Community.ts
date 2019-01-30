import { OnInit } from '@angular/core';
import { StarRating } from './StarRating';
import { Statistics } from './Statistics';

export class Community implements OnInit{

  ngOnInit(){}

  constructor(starRating : StarRating, statistics : Statistics){

    this.starRating = starRating;
    this.statistics = statistics;
  }

  private starRating : StarRating;
  private statistics : Statistics;

  getStarRating(){
    return this.starRating;
  }

  getStatistics(){
    return this.statistics;
  }

}
