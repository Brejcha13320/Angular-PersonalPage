import { Component } from '@angular/core';
import { TimelineJobsComponent } from '@components/timeline-jobs/timeline-jobs.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [TimelineJobsComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  jobsDescription: string =
    'A lo largo de mi carrera, he acumulado una amplia experiencia trabajando en diversos roles y proyectos que abarcan el desarrollo de aplicaciones web y sistemas integrales. Mi enfoque ha sido siempre ofrecer soluciones de alta calidad, optimizando la funcionalidad y el rendimiento para cumplir con las exigencias de los clientes. A continuación, se detallan mis experiencias laborales, destacando mi especialización en tecnologías como JavaScript, TypeScript, Angular, NodeJS, y diversas herramientas de backend y bases de datos.';
}
