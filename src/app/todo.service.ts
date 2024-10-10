import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject, Observable } from 'rxjs';
import { PS } from './ps';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private dane: Todo[] = []
  public Statusy: PS[] = [
    {id:0, name:"Do wykonania"},
    {id:50, name: "W trakcie"},
    {id:100, name: "Wykoanne"},
  ]
  public Priorytety: PS[] = [
    {id:0, name:"Zwykły"},
    {id:50, name: "Pilny"},
  ]


  private _obs = new BehaviorSubject<Array<Todo>>(this.dane);
  constructor() {
    this.load()
   }

  public load(){
    let st = localStorage.getItem('dane5ati');
    if(!st){
      st = '[]';
    }

    this.dane = JSON.parse(st);
    this._obs.next(this.dane);
  }

  public save(){
    localStorage.setItem('dane5ati', JSON.stringify(this.dane));
  }

  public add(data: Todo) : void {
    this.dane.push(data);
    this.save();
    this._obs.next(this.dane);
  }
  public remove(data: Todo){
    this.dane = this.dane.filter(e=>e != data);
    this._obs.next(this.dane);
  }

  public refresh(){
    this._obs.next(this.dane);
  }

  public getData() : Observable<Todo[]> {
    return this._obs.asObservable();
  }
}
