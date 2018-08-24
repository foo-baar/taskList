import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'my-app',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit  {
  tasks: Task[];
  task: Task;
  priorityList = [
    { name: "High", id: 1 },
    { name: "Medium", id: 2 },
    { name: "Low", id: 3 }];

  constructor(private taskService: TaskService){}

  ngOnInit(): void{
    this.task = new Task();
    this.tasks = this.taskService.getTasks();
  }
  addTask(): void {
    !!this.task.name &&
      (this.task.id = this.getRandomId(),
        this.tasks = this.taskService.addTask(this.task),
        this.task = new Task());
  }
  removeTask(id: number): void{
    this.taskService.removeTask(id);
  }
  getRandomId(): number{
    return Math.floor((Math.random() * 10000) + 1)
  }
}

