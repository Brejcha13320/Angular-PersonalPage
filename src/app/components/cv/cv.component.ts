import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  description: string =
    'En esta sección, puedes descargar mi hoja de vida en el idioma que prefieras. Ya sea que necesites una versión en inglés o en español, encontrarás toda la información relevante sobre mi formación académica, experiencia profesional, habilidades y logros. Simplemente selecciona el botón correspondiente para obtener una copia detallada y actualizada de mi trayectoria profesional.';

  /**
   * View File
   */

  downloadSpanishCV() {
    const nameCV = 'Hoja de Vida - Jesus David Mejia V.pdf';
    const url = `assets/cv/${nameCV}`;
    window.open(url, '_blank');
  }

  downloadEnglishCV() {
    const nameCV = 'CV - Jesus David Mejia V.pdf';
    const url = `assets/cv/${nameCV}`;
    window.open(url, '_blank');
  }

  // Download File

  // downloadEnglishCV() {
  //   const nameCV = 'CV - Jesus David Mejia V.pdf';
  //   const link = document.createElement('a');
  //   link.href = `assets/cv/${nameCV}`;
  //   link.download = nameCV;
  //   link.click();
  // }
}
