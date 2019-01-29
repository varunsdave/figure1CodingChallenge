import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsContainerComponent } from './stats-container.component';

describe('StatsContainerComponent', () => {
  let component: StatsContainerComponent;
  let fixture: ComponentFixture<StatsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsContainerComponent);
    component = fixture.componentInstance;
    component.stats = {
      views: 12,
      follow: 12,
      likes: 20
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
