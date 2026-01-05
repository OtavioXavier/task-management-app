import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type INewTaskDTO } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task-component.html',
  styleUrl: './new-task-component.css',
})
export class NewTaskComponent {

  @Output() close = new EventEmitter<void>();

  @Input({required: true}) userId!: string;

  private userService = inject(TasksService);


  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.userService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userId);
    
    this.close.emit();
  }

}
