import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.scss']
})
export class ProjectMenuComponent implements OnInit {
  projects: Project[]
  
  constructor(private project: ProjectsService) { }

  ngOnInit(): void {
  }

}
