import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './services/task.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TasksComponent ],
  bootstrap:    [ TasksComponent ],
  providers: [ TaskService]
})
export class AppModule { }
