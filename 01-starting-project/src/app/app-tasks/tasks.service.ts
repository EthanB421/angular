import { NewTaskData } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn angular',
          dueDate: '2024'
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Learn TypeScript',
          summary: 'Get proficient with TypeScript',
          dueDate: '2024-09-30'
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Build a Portfolio',
          summary: 'Create a personal portfolio website',
          dueDate: '2024-12-31'
        },
      ];

      getUserTasks(userId: string)
      {
        return this.tasks.filter((task) => task.userId === userId);
    }

    constructor() {
      const tasks = localStorage.getItem('tasks');

      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }

    addTask(taskData: NewTaskData, userId: string){
        
            this.tasks.push({
              id: new Date().getTime().toString(),
              userId: userId,
              title: taskData.title,
              summary: taskData.summary,
              dueDate: taskData.date
            });
            this.saveTasks();
        }

    removeTask(id:string)
    {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.saveTasks();
    }

    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}