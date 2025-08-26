import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'Projects' },
  },
  { path: 'skills', component: SkillsComponent, data: { animation: 'Skills' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' },
  },
  { path: '**', redirectTo: 'about' },
];
