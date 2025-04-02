import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CardProjectComponent } from '@components/card-project/card-project.component';
import { Project } from '@interfaces/projects.interface';

@Component({
  selector: 'app-swiper-projects',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './swiper-projects.component.html',
  styleUrl: './swiper-projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperProjectsComponent {
  @Input() projects: Project[] = [];
}
