import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class TaskFormComponent {
  task = {
    title: '',
    description: '',
    status: 'pending',
    createdDate: ''
  };

  onSubmit() {
    console.log('New task added:', this.task);

    // Reset form after submission
    this.task = {
      title: '',
      description: '',
      status: 'pending',
      createdDate: ''
    };
  }
}
