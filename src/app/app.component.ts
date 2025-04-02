import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  Event,
  NavigationEnd,
  ActivatedRoute,
  RouterModule,
} from '@angular/router';
import { register } from 'swiper/element/bundle';
import { IStaticMethods } from 'preline/preline';
import AOS from 'aos';
import { Meta } from '@angular/platform-browser';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  metaContent = "Desarrollador Full Stack especializado en Angular y Node.js. Explora mis proyectos y experiencia.";
  constructor(private meta: Meta, private router: Router, private route: ActivatedRoute) {
    this.meta.updateTag({ name: 'description', content: this.metaContent });
    register();
  }

  ngOnInit(): void {
    // Add code that reinitializes the components every time the page is refreshed to your app
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });

    // Add the smooth scroll script in your main component
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    //AOS Init
    AOS.init({
      duration: 400,
      delay: 200,
    });
  }
}
