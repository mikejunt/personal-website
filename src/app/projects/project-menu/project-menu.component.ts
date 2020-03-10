import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Selectors from '../../store/selectors';
import * as Actions from '../../store/actions';

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.scss']
})
export class ProjectMenuComponent implements OnInit {
  projects$: Observable<Project[]>
  projects: Project[]
  
  constructor(private store: Store<AppState>) {this.projects$ = this.store.select(Selectors.viewAllProjects)
  this.projects$.subscribe(res=>this.projects=res) }

  ngOnInit(): void {
  }

  setViewProj(id: string) {
    this.store.dispatch(Actions.setViewedProject({project: id}))
  }

}
