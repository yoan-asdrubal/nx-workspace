import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToTestLazyLoadRoutingModule } from './to-test-lazy-load-routing.module';
import { ToTestLayLoadComponent } from './to-test-lay-load/to-test-lay-load.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {ClipboardModule} from "ngx-clipboard";


@NgModule({
  declarations: [
    ToTestLayLoadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    ToTestLazyLoadRoutingModule,
    ClipboardModule
  ]
})
export class ToTestLazyLoadModule { }
