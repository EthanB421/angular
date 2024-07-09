import { NgModule } from "@angular/core";
import { AppTasksComponent } from "./app-tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
@NgModule({
    declarations: [AppTasksComponent, TaskComponent, NewTaskComponent],
    exports: [AppTasksComponent]
})
export class TasksModule{}