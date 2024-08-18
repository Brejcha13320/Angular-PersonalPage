import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  skills: string[] = [
    'Administración y Desarrollo de Requerimientos',
    'Planeación de Proyectos',
    'Arquitectura de  Software',
    'Diseño de Bases de Datos',
    'Diseño Detallado del Software',
    'Resolución de Problemas',
    'Liderazgo Tecnico',
    'Comunicación',
    'Gestión del Tiempo',
    'Colaboración y Trabajo en Equipo',
    'Mentoría y Desarrollo de Talento',
    'Toma de Decisiones Estratégicas',
  ];
}
