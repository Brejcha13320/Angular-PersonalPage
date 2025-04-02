import { Component } from '@angular/core';
import { TimelineStudy } from '@interfaces/timeline-studies.interface';

@Component({
  selector: 'app-timeline-studies',
  standalone: true,
  imports: [],
  templateUrl: './timeline-studies.component.html',
  styleUrl: './timeline-studies.component.scss',
})
export class TimelineStudiesComponent {
  timelineStudies: TimelineStudy[] = [
    {
      date: '2024 - 2025',
      image: 'assets/images/logos/usb.png',
      title: 'Especialista en Procesos de Desarrollo de Software',
      description: 'Universidad San Buenaventura Cali',
    },
    {
      date: '2019 - Vigente',
      image: 'assets/images/logos/platzi.png',
      title: 'Estudiante Platzi',
      description: 'Platzi',
    },
    {
      date: '2018 - 2023',
      image: 'assets/images/logos/uceva.png',
      title: 'Ingeniero de Sistemas',
      description: 'Unidad Central del Valle del Cauca - Uceva',
    },
    {
      date: '2016 - 2018',
      image: 'assets/images/logos/uceva.png',
      title: 'Certificate in Academic Knowledge Competency in English',
      description: 'Unidad Central del Valle del Cauca - Uceva',
    },
  ];
}
