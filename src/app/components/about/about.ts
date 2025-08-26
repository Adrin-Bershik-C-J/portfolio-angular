import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent {
  title = "Hi, I'm Adrin Bershik C J";
  subtitle = 'Software Engineering Trainee';
  intro =
    "I thrive on exploring new trends and technologies, constantly learning and adapting to the ever-evolving landscape of the tech world. My goal is to leverage my skills to make a meaningful impact while collaborating with like-minded professionals, mentors, and potential partners who share my enthusiasm for innovation. Always motivated by the challenge of pushing boundaries, I’m committed to continuous growth and to contributing to projects that foster progress and change. Let's connect and collaborate to build the tech of tomorrow!";
}
