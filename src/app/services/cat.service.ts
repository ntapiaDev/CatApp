import { Injectable } from '@angular/core';
import { Cat } from '../interfaces/Cat';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CatService {
  apiKey = '45ee613ab3b14806a77b27329d5b0ded';
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
