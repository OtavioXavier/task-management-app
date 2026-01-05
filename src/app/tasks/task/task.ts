import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type ITask } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  @Input({required: true}) task!: ITask;
  @Output() complete = new EventEmitter<string>();

  private userService = inject(TasksService);

  onCompleteTask() {
    this.userService.deleteTask(this.task.id);
  }

}
