import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStudiesComponent } from './timeline-studies.component';

describe('TimelineStudiesComponent', () => {
  let component: TimelineStudiesComponent;
  let fixture: ComponentFixture<TimelineStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineStudiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
