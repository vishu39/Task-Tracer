import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'

const httpOption={
  headers:new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
private url="http://localhost:5000/tasks"
  constructor(private http:HttpClient) { }

  getTask():Observable<Task[]>{
 return this.http.get<Task[]>(this.url);
  }

  deleteTask(task:Task):Observable<Task>{
const nUrl=`${this.url}/${task.id}`;
return this.http.delete<Task>(nUrl);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const nUrl=`${this.url}/${task.id}`;
return this.http.put<Task>(nUrl,task,httpOption);
  }
 addTask(task:Task):Observable<Task>{
return this.http.post<Task>(this.url,task,httpOption);
  }
}
