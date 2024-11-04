import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router   } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  public dane:Todo = {description:"", id:-1, name:"", position:0, priority:0, status:0, active: true};
  constructor (public serwis : TodoService, private router: Router, private route: ActivatedRoute) {

  }

  get dueDate(): string {
    let data  = this.dane.dueDate; 
    if(data != undefined){
        return new Date(data).toLocaleDateString().split('.').reverse().join('-');
    }
    return "";
  }

  set createDate(val : string){
    this.dane.createDate = new Date(val);
  }

  get createDate(): string {
    let data  = this.dane.createDate; 
    if(data != undefined){
        return new Date(data).toLocaleDateString().split('.').reverse().join('-');
    }
    return "";
  }

  set dueDate(val : string){
    this.dane.dueDate = new Date(val);
  }

  ngOnInit(){
    let ids = this.route.snapshot?.paramMap.get('id');
    if (ids!== undefined){
       let id = ids ? parseInt(ids.toString()):-1; 
       this.dane = this.serwis.item(id);
    }
  }

  zapisz(){
    if(this.dane.id > 0)
      this.serwis.update(this.dane) 
    else 
      this.serwis.add(this.dane);
    this.router.navigate(['/']);
  }
}
