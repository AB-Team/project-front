import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userName: string;

  constructor(private authService: AuthService) {
    this.userName = authService.getUser().getName();
  }

  ngOnInit() {
  }

}
