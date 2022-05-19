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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
