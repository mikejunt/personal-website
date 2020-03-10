import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as Selectors from '../../store/selectors'
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-project-highlight',
  templateUrl: './project-highlight.component.html',
  styleUrls: ['./project-highlight.component.scss']
})
export class ProjectHighlightComponent implements OnInit {
@Input() highlightid: string
features$: Observable<Project[]>
feature: Project

  constructor(private store: Store<AppState>) {this.features$ = this.store.select(Selectors.viewFeatures);
   }

  ngOnInit(): void {  this.features$.subscribe(res=> {if (res) {this.feature = res[this.highlightid]}});
  console.log(this.feature,"feature", this.highlightid, "highlightid")}

}
