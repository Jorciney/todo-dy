import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from '../model/todo';
import { DatePipe } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-view',
  template: `
    <div class="todo-body">
      <div class="box box-4">
        <div class="box-content flexible">
          <input type="text" class="todo-input-field" placeholder="Enter a todo" autofocus="" [(ngModel)]="todo.title"
                 (keyup.enter)="addTodo()">
          <!--          <ng-datepicker class="datepicker" [(ngModel)]="date" (click)="newDate()"-->
          <!--                         (keyup.enter)="addTodo()"></ng-datepicker>-->
        </div>
      </div>
      <div>
        <ul>
          <li *ngFor="let todo of todoList | async" class="todo-list">
            <div (mouseover)="todoComponent.isHovered = true" (mouseleave)="todoComponent.isHovered = false">
              <app-todo [todo]="todo" #todoComponent (delete)="deleteTodo($event)"
                        (updateTodo)="updateTodo($event)"></app-todo>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [`todo.view.scss`]
})
export class TodoView {
  todo = {} as Todo;
  todoList = this.todoService.todos$;
  date?: Date;

  constructor(private readonly todoService: TodoService,
              private readonly datePipe: DatePipe
  ) {
  }

  public addTodo() {
    if (this.todo.title?.trim()) {
      this.todoService.addTodo({
        ...this.todo,
        date: this.datePipe.transform(this.date, 'dd-MM-yyy') || '',
        id: new Date().getTime()
      });
      this.todo = {} as Todo;
    }
  }

  newDate(): void {
    this.date = new Date();
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}
