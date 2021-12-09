import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TASKS } from 'src/app/mock-task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
 @Input() task: Task;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();
  faTrash= faTrash;
  faCheck=faCheck;
  constructor() { }

  ngOnInit(): void {
  }
onDelete(task){
  this.onDeleteTask.emit(task);
}
onToggle(task){
  this.onToggleReminder.emit(task);
}
}
