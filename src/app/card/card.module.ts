import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { PostImageContainerComponent } from './components/post-image-container/post-image-container.component';
import { ProfileImageContainerComponent } from './components/profile-image-container/profile-image-container.component';
import { CommentContainerComponent } from './components/comment-container/comment-container.component';
import { StatsContainerComponent } from './components/stats-container/stats-container.component';

@NgModule({
  declarations: [CardLayoutComponent, PostImageContainerComponent, ProfileImageContainerComponent, CommentContainerComponent, StatsContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardLayoutComponent
  ]
})
export class CardModule { }
