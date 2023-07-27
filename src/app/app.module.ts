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
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AddCatComponent } from './components/add-cat/add-cat.component';
import { CatEffects } from './effects/cat.effects';
import { HomeComponent } from './components/home/home.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatsListComponent,
    CatComponent,
    AddCatComponent,
    EditCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ cats: catReducer }),
    EffectsModule.forRoot([CatEffects]),
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    CatService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
