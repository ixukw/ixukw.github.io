import { Component } from '@angular/core';

import { toolbarItems } from './toolbarItems';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
    toolbarItems = toolbarItems;
}
