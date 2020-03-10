import { Injectable, OnInit } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as Actions from '../store/actions';
// import * as Selectors from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects() {
    this.http.get('/api/projects/all').subscribe(res=>console.log(res, "all projects"))
  }

  getFeatures() {
    this.http.get('/api/projects/feature').subscribe(res=>console.log(res,"features"))
  }

  saveProject(project: Object) {
    this.http.post('/api/projects/new', project).subscribe(res=>console.log(res,"newproject post"))
  }

}
