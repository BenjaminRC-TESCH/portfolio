import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Corregido el nombre de la propiedad a 'styleUrls'
})
export class NavbarComponent implements OnInit {
  private readonly breakpoint = 551;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navLinks = document.querySelectorAll(
      '.nav-link'
    ) as NodeListOf<HTMLElement>;

    if (window.innerWidth >= this.breakpoint) {
      // Verifica el tamaño de la ventana
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
        navLinks.forEach((link) => link.classList.add('scrolledlink'));
      } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach((link) => link.classList.remove('scrolledlink'));
      }
    } else {
      // Para resoluciones menores o iguales a 551px, no se realiza ningún cambio
      navbar.classList.remove('scrolled');
      navLinks.forEach((link) => link.classList.remove('scrolledlink'));
    }
  }
}
