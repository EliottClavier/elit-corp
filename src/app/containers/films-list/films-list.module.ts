import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilmsListPageRoutingModule } from './films-list-routing.module';
import { FilmsListPage } from './films-list.page';
import {TruncatePipe} from "../../pipes/truncate/truncate.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsListPageRoutingModule
  ],
  providers: [TruncatePipe],
  declarations: [FilmsListPage]
})
export class FilmsListPageModule {}
