import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as Actions from '../store/actions';
import * as Selectors from '../store/selectors';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getProjects() {
    this.http.get('/api/projects/all').subscribe(res=>this.store.dispatch(Actions.saveProjects({projects: res['data']})))
  }

  getFeatures() {
    this.http.get('/api/projects/feature').subscribe(res=>this.store.dispatch(Actions.saveFeatures({features: res['data']})))
  }

  saveProject(project: Project) {
    this.http.post('/api/projects/new', project).subscribe(res=>{return})
  }

  editProject(project: Project) {
    this.http.post('/api/projects/edit', project).subscribe(res=>{return})
  }

}
