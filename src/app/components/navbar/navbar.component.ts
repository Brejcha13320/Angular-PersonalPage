import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarOption } from '@interfaces/navbar.interface';
import { SubMenuNavbar } from '../../interfaces/navbar.interface';

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
      name: 'Trayectoria',
      fragment: 'trajectory',
    },
    {
      name: 'Empleos',
      fragment: 'jobs',
    },
  ];

  subMenuNavbar: SubMenuNavbar = {
    name: 'Acerca de Mi',
    items: [
      {
        name: 'Estudios',
        fragment: 'studies',
      },
      {
        name: 'Certificaciones',
        fragment: 'certifications',
      },
      {
        name: 'Hoja de Vida',
        fragment: 'cv',
      },
    ],
  };
}
