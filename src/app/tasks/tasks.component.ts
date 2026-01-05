import { Component, inject, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTaskComponent } from './new-task/new-task-component';
import { INewTaskDTO } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  @Input({ required: true }) name?: string = '';
  @Input({ required: true }) selectedUserId: string = '';

  private tasksService = inject(TasksService);

  newTaskVisible: boolean = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUserId);
  }


  startAddTask() {
    this.newTaskVisible = true;
  }

  cancelAddTask() {
    this.newTaskVisible = false;
  }
}
