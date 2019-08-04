import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showNavbar: boolean = false;
  shrinkHeader: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleNavbar(){
    this.showNavbar = !this.showNavbar;
  }

  onClick(){
    this.router.navigate(['']);
  }

  getSiteHeader(){
    return this.shrinkHeader ? 'siteHeaderShrinked' : 'siteHeader';
  }

  getNavBarBrand(){
    return this.shrinkHeader ? 'navbar-brandShrinked' : 'navbar-brand';
  }

  @HostListener("window:scroll", [])
  onScrollAdjustHeader(){
    if(window.pageYOffset > 240)
      this.shrinkHeader = true;
    else
      this.shrinkHeader = false;
  }
}
