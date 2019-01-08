import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public source: string = "https://www.youtube.com/embed/i6LIpsgKJTQ";
  public safeSource;

  constructor(private _sanitizer: DomSanitizer) {
    this.safeSource = this._sanitizer.bypassSecurityTrustResourceUrl(this.source);
  }

  ngOnInit() {
  }

}
