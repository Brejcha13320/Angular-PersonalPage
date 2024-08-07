import { Component } from '@angular/core';
import { TimelineJob } from '@interfaces/timeline-jobs.interface';

@Component({
  selector: 'app-timeline-jobs',
  standalone: true,
  imports: [],
  templateUrl: './timeline-jobs.component.html',
  styleUrl: './timeline-jobs.component.scss',
})
export class TimelineJobsComponent {
  timelineJobs: TimelineJob[] = [
    {
      date: 'Agosto 2023 - Mayo 2024',
      image: 'assets/images/companies/zygnex.jpeg',
      title: 'Full Stack Developer',
      description:
        'En Zygnex SAS, como Full Stack Javascript Developer, me especialicé en el desarrollo de aplicaciones con Angular y NodeJS, y conocimientos intermedios en React. Mis responsabilidades incluían la creación de APIs robustas y escalables, implementación de pruebas unitarias e integración, despliegues, y mantenimiento de sistemas responsive. También me encargaba de la documentación detallada para asegurar la mantenibilidad a largo plazo.',
      buttonLabel: 'Mas Información',
    },
    {
      date: 'Septimebre 2022 - Agosto 2023',
      image: 'assets/images/companies/grupo-mpr.png',
      title: 'Full Stack Developer',
      description:
        'En Grupo MPR, como Full Stack Javascript Developer, me especialicé en el desarrollo de aplicaciones con Angular y NodeJS. Mis responsabilidades incluían la creación de APIs robustas y escalables, implementación de pruebas unitarias e integración, despliegues, y mantenimiento de sistemas responsive. También me encargaba de la documentación detallada para asegurar la mantenibilidad a largo plazo.',
      buttonLabel: 'Mas Información',
    },
    {
      date: 'Enero 2021 - Abril 2023',
      image: 'assets/images/companies/incdustry.png',
      title: 'Frontend Developer',
      description:
        'En Incdustry, como Frontend Developer, me especialicé en el desarrollo de aplicaciones con Angular y NodeJS. Destacándome en la creación de aplicaciones web y la integración de APIs REST, aseguré optimización, funcionalidad y rendimiento. Implementé pruebas unitarias, pruebas de integración, despliegues y sistemas responsive, y creé documentación detallada para garantizar la fiabilidad y mantenibilidad a largo plazo de cada desarrollo.',
      buttonLabel: 'Mas Información',
    },
    {
      date: 'Enero 2020 - Vigente',
      image: 'assets/images/companies/freelancer.png',
      title: 'Full Stack Developer',
      description:
        'Como Desarrollador Freelance, he trabajado en una variedad de proyectos, ofreciendo soluciones de alta calidad y rendimiento adaptadas a las necesidades del cliente. Utilizando tecnologías como Java SE, Javascript, Typescript, Angular, NodeJS, Express, Nest, Spring Boot, MySQL, PostgreSQL y MongoDB, he desarrollado y desplegado sistemas Frontend y Backend. Implementé y creé APIs, pruebas unitarias, pruebas de integración, despliegues (AWS/Railway/Netlify), sistemas responsive y documentación, asegurando la fiabilidad y mantenibilidad a largo plazo de cada desarrollo.',
      buttonLabel: 'Mas Información',
    },
  ];
}
