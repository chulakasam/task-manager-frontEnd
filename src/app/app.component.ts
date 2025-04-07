import { Component } from '@angular/core';

import {RouterOutlet} from '@angular/router';
import {TaskFormComponent} from './components/task-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [

    RouterOutlet,
    TaskFormComponent
  ],

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
}
