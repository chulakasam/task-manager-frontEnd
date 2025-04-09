import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TaskService} from './task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule],
})
export class TaskFormComponent {
  task = {
    title: '',
    description: '',
    status: 'pending',
    createdAt: ''
  };

  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.task.createdAt = new Date().toISOString();

    this.taskService.addTask(this.task).subscribe({
      next: (response) => {
        console.log('Task successfully added:', response);


        this.task = {
          title: '',
          description: '',
          status: 'pending',
          createdAt: ''
        };
      },
      error: (err) => {
        console.error('Error adding task:', err);
      }
    });
  }
}
