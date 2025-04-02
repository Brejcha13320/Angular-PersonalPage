import { Component } from '@angular/core';
import { CardProjectComponent } from '@components/card-project/card-project.component';
import { Project } from '@interfaces/projects.interface';
import { SwiperProjectsComponent } from '../swiper-projects/swiper-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SwiperProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  textProjects: string =
    'A lo largo de mi carrera profesional, he tenido la oportunidad de trabajar en diversas iniciativas que abarcan una amplia gama de tecnologías y enfoques. Aquí podrás explorar algunos de los proyectos más destacados en los que he contribuido de manera profesional, desde desarrollos complejos en entornos laborales hasta innovaciones y soluciones que he impulsado por mi cuenta. Cada uno de estos proyectos refleja mi compromiso con la excelencia y mi pasión por la tecnología.';

  projects: Project[] = [
    {
      image: 'assets/images/projects/plattaforma.jpg',
      title: 'Plattaforma',
      description:
        'El software que te permite optimizar tus procesos y obtener mayor productividad. Administra tus procesos de forma integral y efectiva, crea tus proyectos y vincúlate con empresas certificadas. Mediante procesos de licitaciones y cotizaciones entre diferentes compañias',
      technologies: ['Angular', 'NodeJS', 'MySQL', 'IONIC', 'HTML', 'SCSS'],
      link: {
        label: 'Mas Información',
        url: 'https://colduty.com/',
      },
    },
    {
      image: 'assets/images/projects/colduty.jpg',
      title: 'Colduty',
      description:
        'Es una herramienta completa ( o solución tributaria ) creada para facilitar y agilizar el trabajo de los contadores. Crea declaraciones de renta para tus empresas, despreocúpate de tablas de Excel inmanejables y gestiona los anexos fácilmente. ',
      technologies: [
        'Angular',
        'NodeJS',
        'React',
        'MySQL',
        'Spring Boot',
        'AWS',
        'SCSS',
        'CI/CD',
      ],
      link: {
        label: 'Mas Información',
        url: 'https://colduty.com/',
      },
    },
    {
      image: 'assets/images/projects/egema-project.png',
      title: 'Proyecto Egema',
      description:
        'Este software está diseñado para gestionar y optimizar los procesos de Trabajo de Grado y Prácticas Profesionales en la Unidad Central del Valle del Cauca. Facilitando la planificación, seguimiento y evaluación de estos procesos académicos.',
      technologies: ['Angular', 'NodeJS', 'MySQL', 'Docker', 'SCSS', 'GitHub'],
      link: {
        label: 'Mas Información',
        url: 'https://github.com/Brejcha13320/Angular-EgemaProject',
      },
    },
    {
      image: 'assets/images/projects/angular-xlsx.png',
      title: 'Angular XLSX',
      description:
        'Aplicación Angular que integra la librería XLSX para realizar operaciones avanzadas con archivos Excel. Ofrece ejemplos prácticos de cómo leer, escribir y crear contenido en Excel, así como convertir datos a y desde HTML. Ideal para desarrollar funcionalidades robustas para la gestión de datos en formatos Excel.',
      technologies: ['Angular', 'XLSX', 'SCSS'],
      link: {
        label: 'Mas Información',
        url: '',
      },
    },
    {
      image: 'assets/images/projects/nodejs-jest.jpg',
      title: 'NodeJS Testing RDB',
      description:
        'Guía para realizar pruebas en aplicaciones Node.js con Prisma ORM y MySQL, utilizando Jest. Incluye estrategias para pruebas unitarias e integrales, además de prácticas para integrar CI/CD para automatizar el proceso de pruebas y despliegue.',
      technologies: [
        'NodeJS',
        'Express',
        'Jest',
        'MySQL',
        'CI/CD',
        'PrismaORM',
        'Docker',
        'Github Actions',
      ],
      link: {
        label: 'Mas Información',
        url: 'https://github.com/Brejcha13320/Node-Testing-Postgres-Unit-E2E',
      },
    },
    {
      image: 'assets/images/projects/angular-mapbox.png',
      title: 'Angular Mapbox',
      description:
        'Aplicación que integra Mapbox para ofrecer funcionalidades avanzadas de mapas. Permite realizar búsquedas, trazar rutas y personalizar la visualización de mapas. Ideal para desarrollar soluciones interactivas y eficientes para la gestión de ubicaciones y navegación.',
      technologies: ['Angular', 'Mapbox', 'Bootstrap', 'Github Actions'],
      link: {
        label: 'Mas Información',
        url: 'https://brejcha13320.github.io/Angular-MapasApp/#/',
      },
    },
    {
      image: 'assets/images/projects/github.png',
      title: 'Repositorio de Github',
      description:
        'Aplicación que integra Mapbox para ofrecer funcionalidades avanzadas de mapas. Permite realizar búsquedas, trazar rutas y personalizar la visualización de mapas. Ideal para desarrollar soluciones interactivas y eficientes para la gestión de ubicaciones y navegación.',
      technologies: ['Angular', 'Mapbox', 'Bootstrap', 'Github Actions'],
      link: {
        label: 'Mas Información',
        url: 'https://github.com/Brejcha13320?tab=repositories',
      },
    },
  ];
}
