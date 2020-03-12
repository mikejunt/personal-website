import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as Selectors from '../../store/selectors';
import * as Actions from '../../store/actions';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project.interface';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-project-highlight',
  templateUrl: './project-highlight.component.html',
  styleUrls: ['./project-highlight.component.scss']
})
export class ProjectHighlightComponent implements OnInit, OnDestroy {
@Input() highlightid: string
features$: Observable<Project[]>
feature: Project
mobileQuery: MediaQueryList
private mobileQueryListener: () => void

  constructor(private store: Store<AppState>, private router: Router,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.features$ = this.store.select(Selectors.viewFeatures);
      this.mobileQuery = media.matchMedia('(max-width: 420px)');
      this.mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this.mobileQueryListener);
   }

  ngOnInit(): void {  this.features$.subscribe(res=> {if (res) {this.feature = res[this.highlightid]}})}

  ngOnDestroy(): void { this.mobileQuery.removeListener(this.mobileQueryListener) }

  projectnav(id: string) {
    this.store.dispatch(Actions.setViewedProject({project: id}))
    this.router.navigate(['/projects'])
  }

}
