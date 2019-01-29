import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageContainerComponent } from './profile-image-container.component';

describe('ProfileImageContainerComponent', () => {
  let component: ProfileImageContainerComponent;
  let fixture: ComponentFixture<ProfileImageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
