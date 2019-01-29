import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImageContainerComponent } from './post-image-container.component';

describe('PostImageContainerComponent', () => {
  let component: PostImageContainerComponent;
  let fixture: ComponentFixture<PostImageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostImageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
