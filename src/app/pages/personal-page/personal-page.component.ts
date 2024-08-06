import { Component, OnInit } from '@angular/core';
import { CertificationsComponent } from '@components/certifications/certifications.component';
import { ContactComponent } from '@components/contact/contact.component';
import { FooterComponent } from '@components/footer/footer.component';
import { JobsComponent } from '@components/jobs/jobs.component';

import { NavbarComponent } from '@components/navbar/navbar.component';
import { PresentationComponent } from '@components/presentation/presentation.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { ReviewsComponent } from '@components/reviews/reviews.component';
import { StatsComponent } from '@components/stats/stats.component';
import { ContactService } from '../../services/contact.service';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    PresentationComponent,
    ProjectsComponent,
    ReviewsComponent,
    StatsComponent,
    JobsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss',
})
export default class PersonalPageComponent implements OnInit {
  whatsApp: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.whatsApp = this.contactService.whatsApp;
  }
}
