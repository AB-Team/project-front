import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  private showNavbar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar(){
    this.showNavbar = !this.showNavbar;
  }

}
