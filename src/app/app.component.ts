import { Component } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';
  constructor (private projects: ProjectsService, private router: Router) {this.projects.getFeatures();this.projects.getProjects(),
  this.router.events.subscribe(event=> {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0,0)}})}
}
