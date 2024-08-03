import { Component } from '@angular/core';

import { NavbarComponent } from '@components/navbar/navbar.component';
import { PresentationComponent } from '@components/presentation/presentation.component';
import { ProjectsComponent } from '@components/projects/projects.component';

@Component({
  standalone: true,
  imports: [NavbarComponent, PresentationComponent, ProjectsComponent],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss',
})
export default class PersonalPageComponent {}
