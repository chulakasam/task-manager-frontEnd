import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  standalone: true,
  imports: []
})
export class TaskFormComponent {
  title = '';
  description = '';
  completed = false;

  onSubmit() {
    console.log('New task added:', { title: this.title, description: this.description, completed: this.completed });


    this.title = '';
    this.description = '';
    this.completed = false;
  }
}
