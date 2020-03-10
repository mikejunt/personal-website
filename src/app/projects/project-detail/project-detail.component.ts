import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as Selectors from '../../store/selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  curproj$: Observable<string>
  curproj: string

  constructor(private store: Store<AppState>) {this.curproj$ = this.store.select(Selectors.viewCurrentProject)
  this.curproj$.subscribe(res=>this.curproj = res) }

  ngOnInit(): void {
  }

}
