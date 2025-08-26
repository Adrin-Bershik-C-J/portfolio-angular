import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  scrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }

  @HostListener('window:resize')
  onResize() {
    // Close mobile menu on window resize (when switching to desktop)
    if (window.innerWidth > 768) {
      this.mobileMenuOpen = false;
    }
  }

  nav = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}