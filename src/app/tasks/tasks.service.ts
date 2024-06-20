import { type NewTaskData } from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class TasksService {
  private tasks = [
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
  ];

  getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
