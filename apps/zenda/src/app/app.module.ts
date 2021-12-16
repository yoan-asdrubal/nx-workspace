import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedZendaMaterialModule} from "@zenda-frontend/shared/zenda-material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {ClipboardModule} from "ngx-clipboard";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'test-app',
          loadChildren: () =>
            import('test-app/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      {initialNavigation: 'enabledBlocking'}
    ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    SharedZendaMaterialModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
