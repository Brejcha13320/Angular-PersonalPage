import { Pipe, PipeTransform } from '@angular/core';
import {
  CategoryCertification,
  Certification,
} from '@interfaces/certifications.interface';

@Pipe({
  name: 'category',
  standalone: true,
})
export class CategoryPipe implements PipeTransform {
  transform(
    certifications: Certification[],
    optionSelect: CategoryCertification | 'all'
  ): Certification[] {
    switch (optionSelect) {
      case 'all':
        return certifications;
      case 'html/css':
        return certifications.filter((item) => item.category === 'html/css');
      case 'javascript':
        return certifications.filter((item) => item.category === 'javascript');
      case 'angular':
        return certifications.filter((item) => item.category === 'angular');
      case 'nodejs':
        return certifications.filter((item) => item.category === 'nodejs');
      case 'java':
        return certifications.filter((item) => item.category === 'java');
      case 'devops':
        return certifications.filter((item) => item.category === 'devops');
      case 'others':
        return certifications.filter((item) => item.category === 'others');

      default:
        return certifications;
    }
  }
}
