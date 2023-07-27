import { Component } from '@angular/core';
import { CatService } from '../services/cat.service';
import { Cat } from '../interfaces/Cat';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.scss'],
  providers: [CatService],
})
export class EditCatComponent {
  id: string = '';
  constructor(
    private catService: CatService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<{ cats: Cat[] }>
  ) {}
  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.catService.getCatById(this.id).subscribe(
      (cat: Cat) => {
        this.form.patchValue({
          name: cat.name,
          color: cat.color,
          age: cat.age,
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des chats :', error);
      }
    );
  }

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
    this.catService.editCat(cat, this.id).subscribe(
      (success) => {
        cat._id = this.id;
        this.store.dispatch({ type: '[Cat] Edit A Cat', cat });
        this.toastr.success('Chat modifié avec succès');
        this.router.navigateByUrl('voir-les-chats');
      },
      (error) => {
        console.error('Erreur lors de la modification du chat :', error);
        this.toastr.error("Le chat n'a pas pu être modifié...");
      }
    );
  }
}
