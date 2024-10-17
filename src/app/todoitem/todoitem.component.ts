import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.scss'
})
export class TodoitemComponent {

  @Input() dane: Todo = {active:false, description:"", name:"",position:0, priority:0, status:0};
  get cdark():boolean {
    return this.dane.active == false;
  }
  get cprimary():boolean {
    let now = new Date();
    return this.cdark && (this.dane.dueDate !== undefined && 
            new Date(this.dane.dueDate) > now)
  }

  constructor (){
    console.log(this.dane);
    
  }
}
