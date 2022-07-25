import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService {
  private todosBS = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this.todosBS.asObservable();

  addTodo(todo: Todo): void {
    this.todosBS.next([todo, ...this.todosBS.getValue()])
  }

  updateTodo(todo: Todo): void {
    const todos = this.todosBS.getValue();
    const todoIndex = todos.findIndex(t => t.id === todo.id);
    todos[todoIndex] = todo;
    this.todosBS.next(todos);
  }

  deleteTodo(id: number): void {
    const todos = this.todosBS.getValue();
    const filteredTodos = todos.filter(todo => todo.id !== id);
    this.todosBS.next(filteredTodos);
  }
}
