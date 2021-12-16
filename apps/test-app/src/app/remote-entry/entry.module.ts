import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {CommonModule} from "@angular/common";
import {SharedZendaMaterialModule} from "@zenda-frontend/shared/zenda-material";
import {TestNestedComponent} from './containers/test-nested/test-nested.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {ClipboardModule} from "ngx-clipboard";

@NgModule({
  declarations: [RemoteEntryComponent, TestNestedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: 'test-nested',
            component: TestNestedComponent
          }, {
            path: 'test-lazy-load',
            loadChildren: () =>
              import('./to-test-lazy-load/to-test-lazy-load.module').then(e => e.ToTestLazyLoadModule)
          },
        ]
      },
    ]),
    ClipboardModule,
    SharedZendaMaterialModule,
  ],
  providers: [],
})
export class RemoteEntryModule {
}
