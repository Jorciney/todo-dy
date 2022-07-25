import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  template: `
    <div class="todo-list-container">
      <div class="todo-desc">
        <input #checkbox class="complete-todo regular-checkbox big-checkbox" type="checkbox" [checked]="todo?.complete"
               (click)="completeTodo()">
        <label [ngClass]="{'todo-title':true, 'todo-complete':todo?.complete}">{{todo?.title}}</label>
        <div class="right">
          <span>{{todo?.date}}</span>
        </div>
      </div>
      <div *ngIf="isHovered" class="bin-container">
        <input class="delete-todo" alt="Delete" type="image" src="../../assets/images/delete-button.svg"
               (click)="delete.emit(this.todo?.id)"/>
      </div>
    </div>
  `,
  styleUrls: [`todo.component.scss`],
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() isHovered = false;
  @Output() updateTodo = new EventEmitter<Todo>()
  @Output() delete = new EventEmitter<number>()

  completeTodo(): void {
    this.updateTodo.emit({...this.todo, complete: !this.todo?.complete})
  }
}
