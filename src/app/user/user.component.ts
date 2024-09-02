import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { log } from 'console';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onClickedEvent() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
