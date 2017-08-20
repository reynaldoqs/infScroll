import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokeService } from './servives/poke.service';
import { MyOwnCustomMaterialModule } from './material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    InfiniteScrollModule,
    MyOwnCustomMaterialModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
