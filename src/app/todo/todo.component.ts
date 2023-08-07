import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToDo } from '../model/todo.model';
import { addToDo } from '../state/todo.actions';
import { AppState } from '../state/todo.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  // constructor(private store: Store<ToDo>) {}
  constructor(private store: Store<AppState>) {}


  username: string = "";

  onClick(f: NgForm) {
    this.store.dispatch(addToDo({data: f.value}))
    // this.store.dispatch(addToDo({data: todoname.value }))
    // alert('message', todoname)

  }
}
