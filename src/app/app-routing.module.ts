import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './components/add-cat/add-cat.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'voir-les-chats', component: CatsListComponent },
  { path: 'ajouter-un-chat', component: AddCatComponent },
  { path: 'modifier-un-chat/:id', component: EditCatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
