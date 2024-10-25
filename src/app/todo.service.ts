import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject, Observable } from 'rxjs';
import { PS } from './ps';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  static lastID: number = 0;
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
    if(this.dane.length>0)
      TodoService.lastID = Math.max(...this.dane.map(e=>e.id)) // pobieramy max-a z id
  }

  public save(){
    localStorage.setItem('dane5ati', JSON.stringify(this.dane));
  }

  public item(id:number) : Todo {
    let dane = this.dane.filter(e=>e.id==id);
    if(dane.length>0) return dane[0];

    return {active:false, id:-1, description:"", name:"",position:0, priority:0, status:0}
  }

  public update(dane: Todo){
    let index = this.dane.findIndex(e=>e.id==dane.id);
    if(index !== -1){
      this.dane[index] = dane;
      this.save();
      this._obs.next(this.dane);
    }
  }

  public add(data: Todo) : void {
    data.id = ++TodoService.lastID;
    this.dane.push(data);
    this.save();
    this._obs.next(this.dane);
  }
  public remove(data: Todo){
    this.dane = this.dane.filter(e=>e != data);
    this._obs.next(this.dane);
    this.save();
  }

  public refresh(){
    this._obs.next(this.dane);
  }

  public getData() : Observable<Todo[]> {
    return this._obs.asObservable();
  }
}
