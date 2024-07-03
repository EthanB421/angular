import { Component ,Input, Output} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";


@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './app-tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class AppTasksComponent {
  @Input ({ required: true}) userId!: string;
  @Input() name?: string;
  isAddingTask = false;
  tasks = [
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
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onAddTask()
  {
    this.isAddingTask = true;
  }
  onCompleteTask(id: string)
  {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }
  
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
