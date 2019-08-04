import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { VideoInfoService } from 'src/app/service/VideoInfoService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showNavbar: boolean = false;
  shrinkHeader: boolean = false;

  constructor(private router: Router, private videoInfoService: VideoInfoService) { }

  ngOnInit() {
  }

  toggleNavbar(){
    this.showNavbar = !this.showNavbar;
  }

  onClick(){
    this.router.navigate(['']);
  }

  getSiteHeader(){
    return this.shrinkHeader || !this.videoInfoService.isHomePage ? 'siteHeaderShrinked' : 'siteHeader';
  }

  getNavBarBrand(){
    return this.shrinkHeader || !this.videoInfoService.isHomePage ? 'navbar-brandShrinked' : 'navbar-brand';
  }

  @HostListener("window:scroll", [])
  onScrollAdjustHeader(){
    console.log(this.videoInfoService);
    if(window.pageYOffset > 240)
      this.shrinkHeader = true;
    else
      this.shrinkHeader = false;
  }
}
