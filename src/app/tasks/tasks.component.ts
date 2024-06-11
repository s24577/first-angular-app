import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isAddingTasks = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all basics and advanced features of Angular',
      dueDate: '2025-12-11'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Finish this course',
      dueDate: '2024-07-01'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2026-01-01'
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTasks =true;
  }

}
