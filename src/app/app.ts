import { Component, LOCALE_ID } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId: string = '';

  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

}
