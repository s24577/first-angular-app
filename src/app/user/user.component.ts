import {Component, Input, Output, EventEmitter, output} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;

}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

 get imagePath() {
    return 'assets/users/' + this.user.avatar
 }

  onSelectedUser() {
   this.select.emit(this.user.id);
  }
}
