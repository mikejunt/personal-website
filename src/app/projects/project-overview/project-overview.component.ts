import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { Project } from 'src/app/interfaces/project.interface';
import { Store } from '@ngrx/store';
import * as Selectors from '../../store/selectors';
import * as Actions from '../../store/actions'

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  projects$: Observable<Project[]>
  projects: Project[]
  mobileQuery: MediaQueryList
  private mobileQueryListener: () => void

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private store: Store<AppState>) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.projects$ = this.store.select(Selectors.viewAllProjects)
    this.projects$.subscribe(res=>this.projects=res)

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  projnav(project: string) {
    this.store.dispatch(Actions.setViewedProject({project: project}))
  }

  ngOnInit(): void {
  }

}
