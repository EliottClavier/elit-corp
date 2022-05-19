import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmsItemPageRoutingModule } from './films-item-routing.module';

import { FilmsItemPage } from './films-item.page';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FilmsItemPageRoutingModule,
        PipesModule,
    ],
    exports: [
        FilmsItemPage
    ],
    declarations: [FilmsItemPage]
})
export class FilmsItemPageModule {}
