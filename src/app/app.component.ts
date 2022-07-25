import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <div class="header-title">TodoDy</div>
      <app-todo-view></app-todo-view>
    </div>
  `,
  styles: [`
    .content {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0;
      width: 50%;
    }
    .header-title {
      font-family: Bariol-Regular, SansSerif, sans-serif;
      font-size: 15rem;
      font-weight: 500;
      color: rgba(255, 248, 241, 0.58);
      padding-left: 12vw;
      width: 80%;
    }
  `]
})
export class AppComponent {
}
