import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  public dane:Todo = {description:"", name:"", position:0, priority:0, status:0};
  constructor (public serwis : TodoService) {

  }
}
