import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event): void {
    const arrow = document.querySelector('.arrow-bottom') as HTMLElement;

    if (window.pageYOffset > 50) {
      arrow.classList.add('scrolled');
    } else {
      arrow.classList.remove('scrolled');
    }
  }
}
