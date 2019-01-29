import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentContainerComponent } from './comment-container.component';
import { ProfileImageContainerComponent } from '../profile-image-container/profile-image-container.component';

describe('CommentContainerComponent', () => {
  let component: CommentContainerComponent;
  let fixture: ComponentFixture<CommentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentContainerComponent,
      ProfileImageContainerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentContainerComponent);
    component = fixture.componentInstance;
    component.comment = {
      profile: {
        username: 'varunTest',
        profileImageUrl: 'abc'
      },
      id: '21',
      text: 'this is a test comment'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
