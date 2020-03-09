import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-highlight',
  templateUrl: './project-highlight.component.html',
  styleUrls: ['./project-highlight.component.scss']
})
export class ProjectHighlightComponent implements OnInit {
@Input() highlightid: string

  constructor() { }

  ngOnInit(): void {  }

}
