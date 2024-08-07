import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Certification } from '@interfaces/certifications.interface';

@Component({
  selector: 'app-table-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-certifications.component.html',
  styleUrl: './table-certifications.component.scss',
})
export class TableCertificationsComponent {
  @Input() certifications: Certification[] = [];
  udemyLogo = 'assets/images/logos/udemy.png';
  platziLogo = 'assets/images/logos/platzi.png';

  companyType(company: string) {
    const lowerCompany = company.toLowerCase();
    let urlCompany = '';
    switch (lowerCompany) {
      case 'udemy':
        urlCompany = this.udemyLogo;
        break;
      case 'platzi':
        urlCompany = this.platziLogo;
        break;
    }
    return urlCompany;
  }
}
