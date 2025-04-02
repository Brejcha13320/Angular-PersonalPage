import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineJobsComponent } from './timeline-jobs.component';

describe('TimelineJobsComponent', () => {
  let component: TimelineJobsComponent;
  let fixture: ComponentFixture<TimelineJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
