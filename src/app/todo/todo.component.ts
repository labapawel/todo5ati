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
    servTodo.add({
      createDate: new Date(),
      name: "nazwa1",
      dueDate: new Date(),
      status:1,
      position:0
    })
    servTodo.add({
      createDate: new Date(),
      name: "nazwa3",
      dueDate: new Date(),
      status:1,
      position:2
    })
    servTodo.add({
      createDate: new Date(),
      name: "nazwa2",
      dueDate: new Date(),
      status:1,
      position:4
    })
    servTodo.getData().subscribe( (dane) => {
      this.dane = dane;
    } )
  }
}
