import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: "1",
      title: "Baseball App",
      url: "github.io/mikejunt",
      summary: "A baseball stats and info site",
      description: "A baseball stats and info website, with team profiles, searchable stats, and roster and transaction information from the MLB data API.  It utilizes Angular 9, Angular Material, @ngrx/store, and a postresql database with an express server backend."
    },
    {
      id: "2",
      title: "Park Reviews",
      url: "github.io/mikejunt",
      summary: "Yelp for Parks in the Omaha area",
      description: "A review service for parks in the Omaha, NE area, created in Angular and using Google Firebase via Angular Fire."
    },
    {
      id: "3",
      title: "Simon",
      url: "github",
      summary: "Simon",
      description: "Simon game in javascript"
    }
  ]


  constructor() { }
}
