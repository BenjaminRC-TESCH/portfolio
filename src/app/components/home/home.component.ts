import { Component, HostListener, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}

  ngOnInit(): void {
    this.loadParticles();
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
}
