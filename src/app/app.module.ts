import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from "../environments/environment";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PipesModule } from "./pipes/pipes.module";
import { WelcomeComponent } from "./containers/welcome/welcome.component";
import { FilmsDetailComponent } from "./containers/films-detail/films-detail.component";
import { FilmsListComponent } from "./containers/films-list/films-list.component";
import { FilmsItemComponent } from "./components/films-item/films-item.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FilmsDetailComponent,
    FilmsListComponent,
    FilmsItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
