import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  name: string = 'Jesus David Mejia';
  carrers: string[] = [
    'Full Stack Developer',
    'Ingeniero de Sistemas',
    'Especialista en Procesos',
    'de Desarrollo de Software',
  ];
  presentation: string =
    'Con respecto a mi persona, tengo 24 años soy Ingeniero en Sistemas y quisiera destacar, que soy una persona que ama y le apasiona lo que hace buscando con ello siempre comprometerse al máximo en cada uno de sus proyectos y que, a su vez, disfruta de trabajar en equipo, compartir sus conocimientos y aprender de igual manera de los conocimientos de los demás. En mi experiencia profesional como desarrollador web, he tenido la oportunidad de trabajar con personas altamente capacitadas en los lenguajes de programación de los diferentes proyectos, lo cual he sabido aprovechar al máximo para mejorar y estimular mis habilidades y conocimientos como profesional en la parte de Frontend y Backend.';
}
