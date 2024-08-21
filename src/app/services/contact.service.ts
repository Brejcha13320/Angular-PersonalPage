import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private urlWhatsApp: string = 'https://wa.me/573147189440';
  private urlLinkedin: string =
    'https://www.linkedin.com/in/jes%C3%BAs-david-mej%C3%ADa-vergara-4586a7230/';
  private urlRepository: string = 'https://github.com/Brejcha13320';

  constructor() {}

  get whatsApp() {
    return this.urlWhatsApp;
  }
  get linkedin() {
    return this.urlLinkedin;
  }
  get repository() {
    return this.urlRepository;
  }
}
