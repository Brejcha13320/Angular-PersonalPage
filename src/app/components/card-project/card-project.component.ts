import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '@interfaces/projects.interface';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  @Input() project: Project | null = null;
}
