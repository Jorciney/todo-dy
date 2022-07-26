import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <div class="header-title">TodoDy</div>
      <app-todo-view class="todo-view"></app-todo-view>
    </div>
  `,
  styles: [`
    .content {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .header-title {
      font-family: Bariol-Regular, SansSerif, sans-serif;
      text-align: center;
      font-size: calc(10em + 3vmin);
      font-weight: 500;
      color: rgba(255, 248, 241, 0.58);
    }

    .todo-view{
      width: 60%;
    }
    @media only screen and (max-width: 500px) {
      .header-title {
        font-size: 5em;
      }
      .todo-view{
        width: 100%;
      }
    }
  `]
})
export class AppComponent {
}
