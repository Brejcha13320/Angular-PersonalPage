import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperProjectsComponent } from './swiper-projects.component';

describe('SwiperProjectsComponent', () => {
  let component: SwiperProjectsComponent;
  let fixture: ComponentFixture<SwiperProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
