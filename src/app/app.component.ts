import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a kendoButton routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a kendoButton routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <kendo-buttongroup>
      <button kendoButton>Dashboard</button>
      <button kendoButton>Heroes</button>
    </kendo-buttongroup>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
