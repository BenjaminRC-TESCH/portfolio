import { Component, HostListener, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.style.projects.css',
    './home.style.skills.css',
    './home.style.cert.css',
    './home.style.about.css',
  ],
})
export class HomeComponent {
  imagesComite: { src: string; alt: string }[] = [];
  imagesAriabit: { src: string; alt: string }[] = [];
  imagesMiRuta: { src: string; alt: string }[] = [];
  imagesFireAuth: { src: string; alt: string }[] = [];
  imagesCertified: { src: string; alt: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadParticles();
    this.generateImageArrayComite();
    this.generateImageArrayAriaBit();
    this.generateImageArrayMiRuta();
    this.generateImageArrayFireAuth();
    this.generateImageArrayCertified();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event): void {
    const arrow = document.querySelector('.arrow-bottom') as HTMLElement;
    const particles = document.querySelector('.particles-js') as HTMLElement;
    const name = document.getElementById('.name') as HTMLElement;

    if (window.pageYOffset > 50) {
      arrow.classList.add('scrolled');
    } else {
      arrow.classList.remove('scrolled');
    }

    if (window.pageYOffset > 50) {
      particles.classList.add('scrolledparticles');
    } else {
      particles.classList.remove('scrolledparticles');
    }
  }

  loadParticles(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () {
      console.log('particles.js loaded - callback');
    });
  }

  generateImageArrayComite(): void {
    for (let i = 1; i <= 25; i++) {
      this.imagesComite.push({
        src: `../../../assets/images/Comite/Comite ${i}.png`,
        alt: `Slide ${i}`,
      });
    }
  }

  generateImageArrayAriaBit(): void {
    for (let i = 1; i <= 21; i++) {
      this.imagesAriabit.push({
        src: `../../../assets/images/Ariabit/Ariabit ${i}.png`,
        alt: `Aria ${i}`,
      });
    }
  }

  generateImageArrayMiRuta(): void {
    for (let i = 1; i <= 17; i++) {
      this.imagesMiRuta.push({
        src: `../../../assets/images/MiRuta/MiRuta ${i}.png`,
        alt: `Ruta ${i}`,
      });
    }
  }

  generateImageArrayFireAuth(): void {
    for (let i = 1; i <= 15; i++) {
      this.imagesFireAuth.push({
        src: `../../../assets/images/AuthFire/fire (${i}).png`,
        alt: `Fire ${i}`,
      });
    }
  }

  generateImageArrayCertified(): void {
    for (let i = 1; i <= 3; i++) {
      this.imagesCertified.push({
        src: `../../../assets/images/certificados/certificado (${i}).jpg`,
        alt: `Fire ${i}`,
      });
    }
  }

  cv() {}
}
