import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { StoreModule } from '@ngrx/store';
import { catReducer } from './store/cat.reducer';
import { CatComponent } from './components/cat/cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cats: catReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
