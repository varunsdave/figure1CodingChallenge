import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutComponent } from './full-layout.component';
import { CardLayoutComponent } from 'src/app/card/components/card-layout/card-layout.component';
import { CardModule } from 'src/app/card/card.module';
import { CommentContainerComponent } from 'src/app/card/components/comment-container/comment-container.component';
import { ProfileImageContainerComponent } from 'src/app/card/components/profile-image-container/profile-image-container.component';
import { StatsContainerComponent } from 'src/app/card/components/stats-container/stats-container.component';
import { PostImageContainerComponent } from 'src/app/card/components/post-image-container/post-image-container.component';

describe('FullLayoutComponent', () => {
  let component: FullLayoutComponent;
  let fixture: ComponentFixture<FullLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutComponent,
      CardLayoutComponent,
      CommentContainerComponent,
      ProfileImageContainerComponent,
      PostImageContainerComponent,
      StatsContainerComponent ]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
