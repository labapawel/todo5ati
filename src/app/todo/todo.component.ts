import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo'
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoitemComponent, NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent {
  public dane: Array<Todo> = [];

  constructor(private servTodo:TodoService){
    
    servTodo.getData().subscribe( (dane) => {
      this.dane = dane;
    } )
  }
}
