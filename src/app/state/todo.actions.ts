import { createAction, props } from '@ngrx/store';
import { ToDoMessage } from '../model/todomessage.model';


export const addToDo = createAction(
  '[To Do] Add', 
  props<{ data: ToDoMessage }>()
);
export const compelteToDo = createAction('[To Do] Complete');
export const deleteToDo = createAction('[To Do] Delete');