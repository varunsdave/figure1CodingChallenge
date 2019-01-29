import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/core/services/rest-client.service';
import {map } from 'rxjs/internal/operators';
import { FeedPostService } from 'src/app/core/services/feedPost.service';
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  postsAsync;
  posts: any[];
  totalPosts: number;
  postCount: number;
  nextUrl: string;

  constructor(
    private feedService: FeedPostService) { }

  ngOnInit() {
    this.feedService.fetchData;
    this.postsAsync = this.feedService.posts.pipe(
      map(feed => {
        this.nextUrl = feed.nextUrl;
        this.posts = feed.data;
        return feed.data;
      })
    );
  }

  nextFeed() {
    this.feedService.paginationNext(this.nextUrl)
  }

  previousFeed() {
  }

}
