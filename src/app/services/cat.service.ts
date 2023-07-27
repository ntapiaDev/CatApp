import { Injectable } from '@angular/core';
import { Cat } from '../interfaces/Cat';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CatService {
  apiKey = 'fba5cabf23e04592833f6a9d5e0b1175';
  url = `https://crudcrud.com/api/${this.apiKey}/cats`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAllCats() {
    return this.http.get<Cat[]>(this.url);
  }

  getCatById(id: string) {
    return this.http.get<Cat>(`${this.url}/${id}`);
  }

  addCat(cat: Cat) {
    return this.http.post(this.url, cat, this.httpOptions);
  }

  editCat(cat: Cat, id: string) {
    return this.http.put(`${this.url}/${id}`, cat, this.httpOptions);
  }

  deleteCat(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
