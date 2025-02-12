import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppTasksComponent } from './app-tasks/app-tasks.component';
import { TaskComponent } from './app-tasks/task/task.component';
import { NewTaskComponent } from './app-tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './app-tasks/tasks.module';

@NgModule({
    declarations: [AppComponent,HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule, TasksModule]
})
export class AppModule {

}