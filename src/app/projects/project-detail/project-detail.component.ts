import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as Selectors from '../../store/selectors'
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  curproj$: Observable<string>
  curproj: string
  projects$: Observable<Project[]>
  project: Project

  constructor(private store: Store<AppState>) {this.curproj$ = this.store.select(Selectors.viewCurrentProject)
  this.curproj$.subscribe(res=>this.curproj = res)
  this.projects$ = this.store.select(Selectors.viewAllProjects)
  this.projects$.subscribe(res=> {
    if (res != []) {
      console.log(res, "array from detail comp")
    let filteredproj = res.filter(obj=> obj._id === this.curproj)
    console.log(filteredproj, "post-filter from detail comp")
    this.project = filteredproj[0]
    }})
   }

  ngOnInit(): void {
  }

}
