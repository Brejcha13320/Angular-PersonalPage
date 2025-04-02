import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  whatsApp: string = '';
  linkedin: string = '';
  repository: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.whatsApp = this.contactService.whatsApp;
    this.linkedin = this.contactService.linkedin;
    this.repository = this.contactService.repository;
  }
}
