import { createReducer, on } from '@ngrx/store';
import { addToDo, deleteToDo } from './todo.actions';
import { ToDo } from '../model/todo.model';

export interface AppState {
  
}

export const initialState: ToDo = {
  text: '',
  // status: 'active'
};

export const todoReducer = createReducer(
  initialState,
  // on(addToDo, (state) => ),
);