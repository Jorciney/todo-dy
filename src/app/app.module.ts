import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoView } from './todo/todo.view';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodoView,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
