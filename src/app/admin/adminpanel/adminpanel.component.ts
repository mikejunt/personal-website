import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as Selectors from '../../store/selectors';
import * as Actions from '../../store/actions'
import * as qclone from 'qclone'

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {
  projects$: Observable<Project[]>
  projects: Project[] = []
  viewproj$: Observable<string>
  viewproj: string
  selproj: string

  newProjectTemplate: Project = {
    title: "",
    summary: "",
    description: "",
    code_url: "",
    proj_url: "",
    tags: "",
    highlight: false,
  }

  newProject: Project
  modProject: Project

  constructor(private projectsvc: ProjectsService, private store: Store<AppState>) {
    this.viewproj$ = this.store.select(Selectors.viewCurrentProject)
    this.projects$ = this.store.select(Selectors.viewAllProjects)
    this.projects$.subscribe(res => { if (res.length != 0) { this.projects = qclone.qclone(res) } })
    this.viewproj$.subscribe(res => {
    this.viewproj = res; let filtered = this.projects.filter(obj => obj._id === this.viewproj);
      if (filtered.length != 0) { this.modProject = qclone.qclone(filtered[0]) }
    })
  }

  ngOnInit(): void {
    this.newProject = { ...this.newProjectTemplate }
    this.modProject = { ...this.newProjectTemplate }
  }


  submitNew() {
    let project = qclone.qclone(this.newProject)
    this.projectsvc.saveProject(project)
    this.newProject = { ...this.newProjectTemplate }
  }

  submitEdit() {
    let project = qclone.qclone(this.modProject)
    this.projectsvc.editProject(project)
    this.modProject = { ...this.newProjectTemplate }
  }


  onSubmit(mode: string) {
    if (mode === "new") {
      this.submitNew()
    }
    if (mode === "mod") {
      this.submitEdit()
    }
    if (mode === "update") {
      this.submitUpdates()
    }
  }

  selProj(event) {
    this.store.dispatch(Actions.setViewedProject({ project: event }))
  }

  submitUpdates() {
    let feature: string[] = []
    let todelete: string[] = []
    this.projects.forEach(obj => {
      if (obj['highlight']) { feature.push(obj._id) }
      if (obj['delete']) { todelete.push(obj._id) }
    })
    this.projectsvc.setFeatureProjects(feature)
    this.projectsvc.deleteProjects(todelete)
  }

}
