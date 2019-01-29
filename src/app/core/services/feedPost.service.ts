import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import {UiPost} from '../models/ui-post.model';
import {Feed, FeedData, Comment} from '../models/feed.model';

@Injectable()
export class FeedPostService {

    _posts: UiPost;
    constructor(private restClientService: RestClientService) {
        this._posts = {};
    }

    fetchData(nextUrl: string = null): Observable<Feed>{
        return this.restClientService.getFeedData(nextUrl).pipe(
            map((feedData) => {
            feedData.feed.forEach(feed => {
                if (feed.type === 'post') {
                    this._posts[feed.id] = feed;
                } else if (feed.type === 'comment') {

                    const comments: Comment[] = [];
                    feed.comments.forEach(comment => {
                        comments.push({
                            profile: {
                                username: feed.username,
                                profileImageUrl: feed.image.profile
                            },
                            id: comment.id,
                            text: comment.text
                        });
                    });
                    this._posts[feed.postID].comments = comments;
                }
            });

            const returnData: FeedData[] = [];
            Object.keys(this._posts).forEach(p => returnData.push(this._posts[p]));
            return {
                nextUrl: feedData._links.next.url,
                data: returnData
            };
        }));
    }

    get posts(): Observable<Feed> {
        return this.fetchData();
    }

    public paginationNext(nextUrl: string) {
        this.fetchData(nextUrl);
    }

}




