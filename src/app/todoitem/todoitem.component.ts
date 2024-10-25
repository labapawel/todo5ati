import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.scss'
})
export class TodoitemComponent {

  public detale: boolean = false;

  constructor (private router: Router, private serwis: TodoService){

  }
  @Input() dane: Todo = {active:false, id:-1, description:"", name:"",position:0, priority:0, status:0};
  get cdark():boolean {
    return this.dane.active == false;
  }
  get cprimary():boolean {
    let now = new Date();
    return !this.cdark && (this.dane.dueDate !== undefined && 
            this.dane.dueDate > now ) && [0].indexOf(this.dane.status) >=0
  }
  public edit(id: number){
    this.router.navigate(['/add', id]);
  }

  public remove(id: number){

    this.serwis.remove(this.serwis.item(id));
  }

  public ngOnInit(){
    this.dane.dueDate = this.dane.dueDate ? new Date(this.dane.dueDate) : undefined;
    this.dane.createDate = this.dane.createDate ? new Date(this.dane.createDate) : undefined;
    console.log(this.dane);
  }

}
