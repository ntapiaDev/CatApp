import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from '../../services/cat.service';
import { ToastrService } from 'ngx-toastr';
import { Cat } from 'src/app/interfaces/Cat';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss'],
  providers: [CatService],
})
export class AddCatComponent {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private catService: CatService,
    private store: Store<{ cats: Cat[] }>
  ) {}

  form = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    age: new FormControl(0),
  });

  async submit() {
    if (!this.form.value.name || !this.form.value.color || !this.form.value.age) {
      this.toastr.error('Merci de remplir tous les champs!');
      return;
    }
    const cat: Cat = {
      name: this.form.value.name,
      color: this.form.value.color,
      age: this.form.value.age,
    };

    this.catService.addCat(cat).subscribe(
      (createdCat: any) => {
        cat._id = createdCat._id;
        this.store.dispatch({ type: '[Cat] Add A Cat', cat });
        this.toastr.success('Chat ajouté avec succès');
        this.router.navigateByUrl('voir-les-chats');
      },
      (error) => {
        console.error('Erreur lors de la création du chat :', error);
        this.toastr.error("Le chat n'a pas pu être ajouté...");
      }
    );
  }
}
