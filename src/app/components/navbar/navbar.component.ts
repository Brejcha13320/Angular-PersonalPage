import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarOption } from '@interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbarOptions: NavbarOption[] = [
    {
      name: 'Perfil',
      fragment: 'profile',
    },
    {
      name: 'Proyectos',
      fragment: 'projects',
    },
    {
      name: 'Empleos',
      fragment: '',
    },
    {
      name: 'Certificaciones',
      fragment: '',
    },
    {
      name: 'CV',
      fragment: '',
    },
  ];
}
