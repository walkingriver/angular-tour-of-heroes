import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <ion-app>
      <ion-split-pane contentId="menu-content">
        <ion-menu contentId="menu-content" menuId="menu-content" side="start" type="overlay">
          <ion-header>
            <ion-toolbar>
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-menu-toggle auto-hide="false">
                <ion-item [routerDirection]="'root'" routerLink="/dashboard">
                  <ion-label>Dashboard</ion-label>
                </ion-item>
                <ion-item [routerDirection]="'root'" routerLink="/heroes">
                  <ion-label>(Feline) Heroes</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
            <my-hero-search></my-hero-search>
          </ion-content>
        </ion-menu>
        <ion-router-outlet id="menu-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-app>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
