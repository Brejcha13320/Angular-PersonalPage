import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableCertificationsComponent } from '@components/table-certifications/table-certifications.component';
import {
  CategoryCertification,
  Certification,
} from '@interfaces/certifications.interface';
import { CategoryPipe } from '../../pipes/category.pipe';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [TableCertificationsComponent, FormsModule, CategoryPipe],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  categorySelect: CategoryCertification | 'all' = 'all';
  optionsSelect: { category: CategoryCertification | 'all'; label: string }[] =
    [
      { category: 'all', label: 'Todas' },
      { category: 'html/css', label: 'HTML/CSS' },
      { category: 'javascript', label: 'Javascript' },
      { category: 'angular', label: 'Angular' },
      { category: 'nodejs', label: 'NodeJS' },
      { category: 'java', label: 'Java' },
      { category: 'devops', label: 'DevOps' },
      { category: 'others', label: 'Otros' },
    ];
  description: string =
    'A lo largo de mi carrera, he dedicado tiempo y esfuerzo a obtener diversas certificaciones que respaldan mis conocimientos y habilidades en el desarrollo de software. Estas certificaciones no solo demuestran mi compromiso con la excelencia profesional, sino que también garantizan mi capacidad para abordar proyectos complejos con las mejores prácticas y tecnologías disponibles. A continuación, encontrarás una lista de las certificaciones que he obtenido, reflejando mi continuo crecimiento y aprendizaje en el campo.';
  certifications: Certification[] = [
    {
      company: 'Udemy',
      name: 'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
      date: 'Agosto, 2022',
      urlCertification:
        'https://www.udemy.com/certificate/UC-5b5e8074-10ab-4801-90a3-074be0fb4dfc/',
      category: 'html/css',
    },
    {
      company: 'Udemy',
      name: 'JavaScript Moderno: Guía para dominar el lenguaje',
      date: 'Junio, 2022',
      urlCertification:
        'https://www.udemy.com/certificate/UC-b15d33cd-56a0-4414-a471-e2fedc51f94d/',
      category: 'javascript',
    },
    {
      company: 'Udemy',
      name: 'Legacy - Node: De cero a experto',
      date: 'Diciembre, 2022',
      urlCertification:
        'https://www.udemy.com/certificate/UC-d33eaf33-23d2-4c65-b1ee-d2ce0e0a47ee/',
      category: 'nodejs',
    },
    {
      company: 'Udemy',
      name: 'NodeJS: De cero a experto',
      date: 'Febrero, 2024',
      urlCertification:
        'https://www.udemy.com/certificate/UC-917a0a9b-de1d-4d42-a90a-91f78ccfc43d/',
      category: 'nodejs',
    },
    {
      company: 'Udemy',
      name: 'Angular: De cero a experto',
      date: 'Abril, 2024',
      urlCertification:
        'https://www.udemy.com/certificate/UC-4ba0e89f-c53d-4ac8-a007-c342379cbf03/',
      category: 'angular',
    },
    {
      company: 'Udemy',
      name: 'ReactiveX - RxJs: De cero hasta los detalles',
      date: 'Marzo, 2024',
      urlCertification:
        'https://www.udemy.com/certificate/UC-3204d478-68b7-4362-923e-afb722ef0d9c/',
      category: 'angular',
    },
    {
      company: 'Udemy',
      name: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica',
      date: 'Noviembre, 2023',
      urlCertification:
        'https://www.udemy.com/certificate/UC-1fe800da-6a2e-4f9b-be72-22def7203d3a/',
      category: 'angular',
    },
    {
      company: 'Udemy',
      name: 'Docker - Guía práctica de uso para desarrolladores',
      date: 'Junio, 2024',
      urlCertification:
        'https://www.udemy.com/certificate/UC-cd428ab5-1178-42c7-9884-9682d92d3ae3/',
      category: 'devops',
    },
    {
      company: 'Platzi',
      name: 'Curso Profesional de Git y GitHub',
      date: 'Diciembre, 2021',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/1557-git-github/diploma/detalle/',
      category: 'others',
    },
    {
      company: 'Platzi',
      name: 'Curso de Frontend Developer',
      date: 'Enero, 2022',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2467-frontend-developer/diploma/detalle/',
      category: 'html/css',
    },
    {
      company: 'Platzi',
      name: 'Curso de TypeScript',
      date: 'Diciembre, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2878-typescript/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de TypeScript: Programación Orientada a Objetos y Asincronismo',
      date: 'Diciembre, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2880-typescript-poo/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de TypeScript: Tipos Avanzados y Funciones',
      date: 'Diciembre, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2879-typescript-tipos-avanzados/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Frontend con Angular',
      date: 'Mayo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/ruta/7045-web-angular/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Fundamentos de Angular',
      date: 'Septiembre, 2022',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2478-angular16/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Angular: Componentes y Servicios',
      date: 'Septiembre, 2022',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2486-angular-componentes/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Consumo de APIs REST con Angular',
      date: 'Diciembre, 2022',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2495-angular-apis/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Angular Router: Lazy Loading y Programación Modular',
      date: 'Enero, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2487-angular-modular/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Angular Forms: Creación y Optimización de Formularios Web',
      date: 'Febrero, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2027-angular-forms/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso Básico de Tailwind 2 y 3',
      date: 'Mayo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2702-tailwind/diploma/detalle/',
      category: 'html/css',
    },
    {
      company: 'Platzi',
      name: 'Curso de Maquetación con Angular CDK y Tailwind CSS',
      date: 'Mayo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/4459-angular-tailwind/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Autenticación con Angular',
      date: 'Mayo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/4460-angular-autenticacion/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Laboratorio de Angular: Optimización Web con Lighthouse y SSR',
      date: 'Mayo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/4030-laboratorio-angular-lighthouse/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Angular: Unit Testing para Servicios',
      date: 'Marzo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2897-angular-unit-testing-servicios/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Angular: Unit Testing para Componentes',
      date: 'Marzo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2908-angular-unit-testing-componentes/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Angular: Unit Testing para Formularios',
      date: 'Mayo, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2941-angular-unit-testing-formularios/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Programación Reactiva con RxJS',
      date: 'Diciembre, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/3233-programacion-reactiva-rxjs/diploma/detalle/',
      category: 'angular',
    },
    {
      company: 'Platzi',
      name: 'Curso de Fundamentos de Node.js',
      date: 'Febrero, 2022',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/1759-fundamentos-node/diploma/detalle/',
      category: 'nodejs',
    },
    {
      company: 'Platzi',
      name: 'Curso de Backend con Node.js: API REST con Express.js',
      date: 'Febrero, 2022',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2485-backend-nodejs/diploma/detalle/',
      category: 'nodejs',
    },
    {
      company: 'Platzi',
      name: 'Curso de Backend con Node.js: Base de Datos con PostgreSQL',
      date: 'Abril, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2507-backend-nodejs-postgres/diploma/detalle/',
      category: 'nodejs',
    },
    {
      company: 'Platzi',
      name: 'Curso de Backend con Node.js: Autenticación con Passport.js y JWT',
      date: 'Abril, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2489-passport/diploma/detalle/',
      category: 'nodejs',
    },
    {
      company: 'Platzi',
      name: 'Curso de Node.js: Autenticación, Microservicios y Redis',
      date: 'Abril, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/1767-nodejs-microservicios/diploma/detalle/',
      category: 'nodejs',
    },
    {
      company: 'Platzi',
      name: 'Curso de Introducción al Testing con JavaScript',
      date: 'Julio, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/2920-javascript-testing/diploma/detalle/',
      category: 'nodejs',
    },
    {
      company: 'Platzi',
      name: 'Curso de End to End Testing para APIs REST con Node.js',
      date: 'Julio, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/4755-e2e-testing-nodejs/diploma/detalle/',
      category: 'nodejs',
    },
    {
      company: 'Platzi',
      name: 'Curso de GitHub Actions',
      date: 'Noviembre, 2023',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/7992-github-actions/diploma/detalle/',
      category: 'devops',
    },
    {
      company: 'Platzi',
      name: 'Curso de Java Spring',
      date: 'Junio, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/1996-java-spring/diploma/detalle/',
      category: 'java',
    },
    {
      company: 'Platzi',
      name: 'Curso de Java Spring Data JPA: Bases de Datos',
      date: 'Agosto, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/7825-course/diploma/detalle/',
      category: 'java',
    },
    {
      company: 'Platzi',
      name: 'Curso de Java Spring Security: Autenticación y Seguridad Web',
      date: 'Agosto, 2024',
      urlCertification:
        'https://platzi.com/p/Darkreen/curso/7694-course/diploma/detalle/',
      category: 'java',
    },
  ];
}
