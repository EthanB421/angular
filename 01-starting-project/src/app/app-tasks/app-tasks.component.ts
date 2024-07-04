import { Component ,Input, Output} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';


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
  
  constructor(private tasksService: TaskService) {
  }
  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask()
  {
    this.isAddingTask = true;
  }
  onCompleteTask(id: string)
  {
  }
  
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
