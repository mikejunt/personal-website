import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as Selectors from '../../store/selectors'
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  curproj$: Observable<string>
  curproj: string
  projects$: Observable<Project[]>
  projects: Project[]
  project: Project

  constructor(private store: Store<AppState>, private router: Router) {
    this.curproj$ = this.store.select(Selectors.viewCurrentProject)
    this.projects$ = this.store.select(Selectors.viewAllProjects)
    this.projects$.subscribe(res => {this.projects = [...res];if (this.curproj === ""){this.project = this.projects[0]}})
    this.curproj$.subscribe(res => {
    this.curproj = res;
      if (res === "") {this.project = this.projects[0]} 
      else { let filterproj = this.projects.filter(obj => obj._id === res)
             this.project = filterproj[0]}})
  }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/admin'])
  }

}
