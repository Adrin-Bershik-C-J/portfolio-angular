import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Tourism App For Coimbatore',
      description:
        'Developed a tourism app on Android Studio for Coimbatore, featuring tourist spots, hotels, and restaurants. Integrated location-based features for a seamless user experience. Ensured high-quality UI/UX. Currently under copyright process and to be uploaded to Play Store.',
      tags: ['Android Studio', 'Firebase'],
    },
    {
      title: 'Homeopathy Clinic Website and App',
      description:
        'Developed a website and mobile app for a homeopathy clinic, allowing patients to book appointments and consult doctors via video calls. Integrated an ML model to classify patients as acute or chronic based on initial symptom input. Patients can make appointments and track their medical records. Doctors can track patients with the call log.',
      tags: ['ReactJS', 'React Native', 'NodeJS', 'ExpressJS', 'MongoDB'],
    },
    {
      title: 'Social Media Website',
      description: 'Posts, follows, comments, media uploads, and pagination.',
      tags: [
        'ReactJS',
        'Cloudinary',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'Socket.io',
      ],
    },
  ];
}
