import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:5050/taskManager/api/v1/task';

  constructor(private http: HttpClient) {}

  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`http://localhost:5050/taskManager/api/v1/task/${id}`);
  }


}
