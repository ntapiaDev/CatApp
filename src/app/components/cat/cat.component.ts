import { Component, Input } from '@angular/core';
import { Cat } from '../../interfaces/Cat';
import { CatService } from '../../services/cat.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent {
  @Input() cat!: Cat;

  constructor(private catService: CatService, private toastr: ToastrService, private store: Store<{ cats: Cat[] }>) {}

  deleteCat = async (id: string) => {
    this.catService.deleteCat(id).subscribe(
      (success) => {
        this.store.dispatch({ type: '[Cat] Delete A Cat', id });
        this.toastr.success('Chat supprimé avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression du chat :', error);
        this.toastr.error("Le chat n'a pas pu être supprimé...");
      }
    );
  };
}
