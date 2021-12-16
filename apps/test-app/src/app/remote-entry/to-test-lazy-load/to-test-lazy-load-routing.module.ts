import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToTestLayLoadComponent} from "./to-test-lay-load/to-test-lay-load.component";

const routes: Routes = [
  {
    path: '',
    component: ToTestLayLoadComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToTestLazyLoadRoutingModule {
}
