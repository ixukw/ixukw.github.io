import { Component } from '@angular/core';

import { projectItems } from './projectItems';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
    projectItems = projectItems;
}
