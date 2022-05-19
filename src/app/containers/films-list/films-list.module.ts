import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilmsListPageRoutingModule } from './films-list-routing.module';
import { FilmsListPage } from './films-list.page';
import {PipesModule} from "../../pipes/pipes.module";
import {FilmsItemPageModule} from "../../components/films-item/films-item.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsListPageRoutingModule,
    PipesModule,
    FilmsItemPageModule
  ],
  providers: [],
  declarations: [FilmsListPage]
})
export class FilmsListPageModule {}
