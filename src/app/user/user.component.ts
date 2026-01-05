import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { type IUser } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @Input({required: true}) user!: IUser;
  @Input({required: true}) isSelected: boolean = false;

  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return `users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
