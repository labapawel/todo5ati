import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private dane: Todo[] = []
  private _obs = new BehaviorSubject<Array<Todo>>([]);
  constructor() { }
  public add(data: Todo) : void {
    this.dane.push(data);
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
