import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo'
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { NgFor } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoitemComponent, NgFor, DragDropModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent {
  public dane: Array<Todo> = [];


  public drop(event:CdkDragDrop<Todo[], any, any>){
    
    
    
  }

  constructor(private servTodo:TodoService){
    
    servTodo.getData().subscribe( (dane) => {
      this.dane = dane;
      console.log(dane);
    } )
  }
}
