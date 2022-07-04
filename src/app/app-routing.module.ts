import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./containers/welcome/welcome.component";
import {FilmsListComponent} from "./containers/films-list/films-list.component";
import {FilmDetail} from "./shared/models/filmdetail.model";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'films-list',
    component: FilmsListComponent
  },
  {
    path: 'films-detail/:id',
    component: FilmDetail
  },
  {
    path: 'films-item',
    component: WelcomeComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
