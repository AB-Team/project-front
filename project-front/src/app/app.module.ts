import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './home/body/body.component';
import { VideoframeComponent } from './home/body/videoframe/videoframe.component';
import { HeaderComponent } from './home/header/header.component';
import { VideoplaybackComponent } from './home/videoplayback/videoplayback.component';
import { MainVideoFrameComponent } from './home/body/main-video-frame/main-video-frame.component';
import { ArticleheadlineComponent } from './home/body/articleheadline/articleheadline.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'videoplayback', component: VideoplaybackComponent},
  {path: '404', component: HomeComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    VideoframeComponent,
    VideoplaybackComponent,
    MainVideoFrameComponent,
    ArticleheadlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
