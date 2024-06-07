import {Component, computed, signal} from '@angular/core';
import { DUMMY_USERS} from "../dummy-users";

const randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
const randomUserIndex = DUMMY_USERS.indexOf(randomUser);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectedUser() {
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
  }
}
