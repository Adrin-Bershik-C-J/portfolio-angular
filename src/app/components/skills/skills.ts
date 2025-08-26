import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class SkillsComponent {
  // Change these in your .ts file as needed
  headline = 'Skills';
  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java',
    'Node.js',
    'Express',
    'MongoDB',
    'Spring Boot',
    'PostgreSQL',
  ];
}
