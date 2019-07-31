import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showNavbar: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleNavbar(){
    this.showNavbar = !this.showNavbar;
  }

  onClick(){
    this.router.navigate(['']);
  }

}
