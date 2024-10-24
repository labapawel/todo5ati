import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

export const routes: Routes = [
    {path: '', component: TodoComponent},
    {path: 'add', component: AddTodoComponent},
    {path: 'add/:id', component: AddTodoComponent},
];
