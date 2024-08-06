import { Component } from '@angular/core';
import { TimelineStudiesComponent } from '@components/timeline-studies/timeline-studies.component';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [TimelineStudiesComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
})
export class StudiesComponent {
  studiesDescription: string =
    'A lo largo de mi carrera académica, he tenido la oportunidad de adquirir conocimientos y habilidades en diversas instituciones educativas. En esta sección, encontrarás un resumen de mis estudios formales, incluyendo títulos obtenidos, cursos relevantes y certificaciones. Además, destaco los premios y reconocimientos que he recibido por mi desempeño académico y mis participaciones en conferencias, seminarios y proyectos de investigación. Estos logros reflejan mi dedicación y compromiso con el aprendizaje continuo y mi pasión por expandir mis horizontes intelectuales.';
  scholarships: string =
    'A lo largo de mi carrera universitaria, obtuve un total de 7 becas de rendimiento académico gracias a mis destacadas calificaciones. Estas becas no solo reconocieron mi dedicación y excelencia académica, sino que también jugaron un papel fundamental en la financiación de mi educación. ';
  publication: string =
    ' El artículo fue aprobado el 20/11/2019, en la revista "Visión electrónica" ISSN: 1909 9746,  e-ISSN:  2248-4728, categorizada a 2019 según Publindex como C.';
  urlPublication: string =
    'https://drive.google.com/file/d/1-6L9PCIupsyW6fpR-1bOVnEnUkaXziUJ/view';
}
