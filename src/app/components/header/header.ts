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


@HostListener('window:scroll') onScroll() {
this.scrolled = window.scrollY > 10;
}


nav = [
{ path: '/about', label: 'About' },
{ path: '/projects', label: 'Projects' },
{ path: '/skills', label: 'Skills' },
{ path: '/contact', label: 'Contact' },
];
}