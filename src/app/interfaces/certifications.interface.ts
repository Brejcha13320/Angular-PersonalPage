export interface Certification {
  company: string;
  name: string;
  date: string;
  urlCertification: string;
  category: CategoryCertification;
}

export type CategoryCertification =
  | 'html/css'
  | 'angular'
  | 'javascript'
  | 'nodejs'
  | 'java'
  | 'devops'
  | 'others';
