import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutComponent } from './card-layout.component';
import { ProfileImageContainerComponent } from '../profile-image-container/profile-image-container.component';
import { StatsContainerComponent } from '../stats-container/stats-container.component';
import { CommentContainerComponent } from '../comment-container/comment-container.component';
import { PostImageContainerComponent } from '../post-image-container/post-image-container.component';

describe('CardLayoutComponent', () => {
  let component: CardLayoutComponent;
  let fixture: ComponentFixture<CardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLayoutComponent ,
        ProfileImageContainerComponent,
      StatsContainerComponent,
    CommentContainerComponent, 
  PostImageContainerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLayoutComponent);
    component = fixture.componentInstance;
    component.feedData = {
      type: 'post',
      username: 'varunText',
      image: {
        profile: '',
        post: ''
      },
      stats: {
        follow: 10,
        views: 10,
        like: 10
      },
      caption: 'asdsadsa'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
