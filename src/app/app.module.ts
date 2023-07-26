import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { StoreModule } from '@ngrx/store';
import { catReducer } from './store/cat.reducer';
import { CatComponent } from './components/cat/cat.component';
import { EffectsModule } from '@ngrx/effects';
import { CatEffects } from './effects/cat.effects';
import { CatService } from './services/cat.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cats: catReducer }),
    EffectsModule.forRoot([CatEffects]),
    HttpClientModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
