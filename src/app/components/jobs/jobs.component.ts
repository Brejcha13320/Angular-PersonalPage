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
  angular: string =
    'HTML, SCSS, Javascript, Typescript, Modules, Components, Services, Directives, Pipes, Guards, Interceptors, Templates, Inputs/Ouputs, Routing, Reactive Forms, RxJS, HTTP Client, NgRx/Redux, Lifecycle, Jasmine, Karma, Testing (Unit-Test/Integration-Test/E2E), Optimización, Performance, Librerías Frontend (Bootstrap, PrimeNG, Angular Material, CDK, Tailwind, etc.), Seguridad, SOLID, Herramientas de Desarrollo/Diseño, Despliegue, CI/CD, Arquitectura, Diseño de Software, UI, UX, Aprendizaje Continuo, Adaptabilidad, Responsive, etc.';
  nodejs: string =
    'Javascript, Typescript, NPM, NVM, Nodemon, Express, Bases de Datos (MySQL, MariaDB, PostgreSQL, MongoDB), ORM (Prisma, Sequealize, etc.), Async/Await, Promesas, Gestión de Archivos, Sistemas de Ruteo, Auth, JWT, Middlewares, Emails, Cron Jobs, Jest, Testing (Unit-Test/Integration-Test/E2E), Encriptación, Seguridad, CORS, Clean Architecture, DDD, DTO, Entidades, CORS, Despliegue, CI/CD, Swagger, Optimización, Rendimiento, Arquitectura de software, Diseño de APIs, Monitorización, Escalabilidad, Aprendizaje Continuo, Adaptabilidad, etc. ';
  springBoot: string =
    'Java SE, Spring Boot, Spring Framework, Spring Web, Spring Data JPA, JPQL, JDBC, Hibernate, Query, Query Methods, Audition, DTO, Repository, CrudRepository, PageAndSortRepository, Services, Entity, API Rest, HTTP, etc. ';
  devOps: string =
    'CI/CD, Deployment, GitHub Actions, Workflows, Pipelines, Linux, Deployment, Serverless, Railway, Netlify, Bases de Datos en la Nube, Docker, Imagenes, Redes, Volúmenes, Docker File, Multi Stage Build, Multi Container Applications, NGINX, Kubernetes, etc. ';
  aws: string =
    'VPC, EC2, EDB, EFS, FSX, S3, RDS, Lambda, AWS SDK, Amplify, etc.';
  database: string =
    'SQL, Gestores de Bases de Datos, MySQL, MariaDB, Postgres, Oracle y MongoDB. ';
  others: string =
    'Git, GitHub, GitLab, Scrum Fundamentals, Notion, Slack, Trello, Monday, Soporte, etc. ';
}
