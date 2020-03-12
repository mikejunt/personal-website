import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as Selectors from '../store/selectors';
import { Project } from '../interfaces/project.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  features$: Observable<Project[]>;
  featureids: Array<string> = [];

  constructor(private store: Store<AppState>) {this.features$ = this.store.select(Selectors.viewFeatures)
  this.features$.subscribe(res=> 
    {if (res.length != 0) {res.forEach(obj => {this.featureids.push(obj["_id"])})}console.log(this.featureids)}) }

  ngOnInit(): void { 
  }

}
