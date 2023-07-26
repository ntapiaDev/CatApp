import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { StoreModule } from '@ngrx/store';
import { catReducer } from './store/cat.reducer';
import { CatComponent } from './components/cat/cat.component';
import { CatService } from './services/cat.service';
import { HttpClientModule } from '@angular/common/http';
import { AddCatComponent } from './components/add-cat/add-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatComponent,
    AddCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cats: catReducer }),
    HttpClientModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
