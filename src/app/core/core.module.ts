import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestClientService } from './services/rest-client.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FeedPostService } from './services/feedPost.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [RestClientService, FeedPostService]
})
export class CoreModule { }
