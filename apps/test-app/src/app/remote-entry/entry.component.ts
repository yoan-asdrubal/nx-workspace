import {Component} from '@angular/core';
import {UntilDestroy} from "@ngneat/until-destroy";
@UntilDestroy()
@Component({
  selector: 'zenda-frontend-test-app-entry',
  template: `
    <mat-toolbar color="warn">
      <h2>test-app's Remote Entry Component</h2>
      <h2><a routerLink="/test-app/test-nested">test-nested</a></h2>
      <h2><a routerLink="/test-app/test-lazy-load">test-lazy-load</a></h2>
    </mat-toolbar>
    <section class="container">
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {
}
