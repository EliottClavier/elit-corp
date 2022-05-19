import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsItemPage } from './films-item.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsItemPageRoutingModule {}
