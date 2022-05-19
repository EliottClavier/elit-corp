import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'films-list',
    loadChildren: () => import('./containers/films-list/films-list.module').then( m => m.FilmsListPageModule)
  },
  {
    path: 'films-detail',
    loadChildren: () => import('./containers/films-detail/films-detail.module').then( m => m.FilmsDetailPageModule)
  },
  {
    path: 'films-item',
    loadChildren: () => import('./components/films-item/films-item.module').then( m => m.FilmsItemPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
