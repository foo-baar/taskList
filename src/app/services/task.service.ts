import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable()

export class TaskService {

  private tasks: Task[] = [];
  constructor() { }

  getTasks(): Task[]{
    return this.tasks;
  } 
  addTask(task: Task){
      this.tasks.push(task);
      return this.tasks.sort((a,b) => { return a.priority - b.priority });
  }
  removeTask(id: number): void{
    let itemIndex = this.tasks.findIndex(task => task.id === id);
    if(itemIndex != -1)
      this.tasks.splice(itemIndex, 1);
  }
}