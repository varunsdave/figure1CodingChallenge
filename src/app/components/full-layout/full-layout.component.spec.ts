import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutComponent } from './full-layout.component';
import { CardLayoutComponent } from 'src/app/card/components/card-layout/card-layout.component';
import { CardModule } from 'src/app/card/card.module';
import { CommentContainerComponent } from 'src/app/card/components/comment-container/comment-container.component';
import { ProfileImageContainerComponent } from 'src/app/card/components/profile-image-container/profile-image-container.component';
import { StatsContainerComponent } from 'src/app/card/components/stats-container/stats-container.component';
import { PostImageContainerComponent } from 'src/app/card/components/post-image-container/post-image-container.component';
import { RestClientService } from 'src/app/core/services/rest-client.service';
import { FeedPostService } from 'src/app/core/services/feedPost.service';
import { Observable, of } from 'rxjs';
import {Feed} from '../../core/models/feed.model';

class MockFeedPostService extends FeedPostService {

  fetchData(): Observable<Feed> {
    return of({
      nextUrl: '',
      data: [
        {
          id: 'asdasd',
          username: 'testUser',
          caption: 'okay image',
          image: {
            profile: 'https://images.unsplash.com/photo-1516716984596-1f6e47c5e986?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0303fcb116aa42fe677673e6fe1fa3f6&auto=format&fit=crop&w=400&q=60',
            post: 'https://images.unsplash.com/photo-1516716984596-1f6e47c5e986?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0303fcb116aa42fe677673e6fe1fa3f6&auto=format&fit=crop&w=400&q=60'
          },
          stats: {
            star: 10,
            views: 20,
            follow: 5
          },
          comments: []
        }
      ]
    });
  }
}

describe('FullLayoutComponent', () => {

  describe('Empty Config', () => {
    let component: FullLayoutComponent;
    let fixture: ComponentFixture<FullLayoutComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ FullLayoutComponent,
          CardLayoutComponent,
          CommentContainerComponent,
          ProfileImageContainerComponent,
          PostImageContainerComponent,
          StatsContainerComponent ],
        providers: [
          {provide: FeedPostService, useClass: MockFeedPostService},
          {provide: RestClientService}
        ]

      })
        .compileComponents();
    }));

    beforeEach(() => {
      // TestBed.overrideComponent(FullLayoutComponent, {
      //   set: {
      //     providers: [
      //       {provide: FeedPostService, useClass: null}
      //     ]
      //   }
      // });
      fixture = TestBed.createComponent(FullLayoutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {

      expect(component).toBeTruthy();
      expect(component.posts.length).toEqual(1);
      fixture.detectChanges();
    });
  })

});
