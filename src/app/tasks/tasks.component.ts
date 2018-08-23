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
  priority: string;
  priorityList = [
    { name: "High", id: 1 },
    { name: "Medium", id: 2 },
    { name: "Low", id: 3 }];

  constructor(private taskService: TaskService){}

  ngOnInit(): void{
    this.task = new Task();
    this.tasks = this.taskService.getTasks();
  }
  addTask():void{
    this.task.priority = this.priorityList.find(e => e.name === this.priority).id;
    this.task.id = this.getRandomId();
    this.tasks = this.taskService.addTask(this.task);
    this.priority = '';
    this.task = new Task();
  }
  removeTask(id: number): void{
    this.taskService.removeTask(id);
  }
  getRandomId(): number{
    return Math.floor((Math.random() * 10000) + 1)
  }
}

