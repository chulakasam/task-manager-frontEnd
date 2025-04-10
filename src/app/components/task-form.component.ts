import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TaskService} from './task.service';
import {CommonModule} from '@angular/common';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatIcon],
})
export class TaskFormComponent implements OnInit {
  task = {
    title: '',
    description: '',
    status: 'pending',
    createdAt: ''
  };
  tasks: any[] = [];
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

        this.loadTasks();
      },
      error: (err) => {
        console.error('Error adding task:', err);
      }
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => {
        console.error('Failed to load tasks:', err);
      }
    });
  }
  deleteTasks(id: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      console.log('Deleting task:', id);
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          this.tasks = this.tasks.filter(task => task.id !== id);
          console.log('Task deleted successfully');
          this.loadTasks();
        },
        error: (err) => {
          console.error('Error deleting task:', err);
        }
      });
    }
  }






}
