import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  newProject: Project = {
    title: "",
    summary: "",
    description: "",
    code_url: "",
    proj_url: "",
    tags: "",
    highlight: false,
  }

  constructor(private projects: ProjectsService) { }

  ngOnInit(): void {
  }

onSubmit() {
  console.log(this.newProject)
  this.projects.saveProject(this.newProject)
}

}
