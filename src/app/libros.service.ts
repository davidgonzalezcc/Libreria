import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './model/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { }

  searchAllBooks(): Observable<Libro[]>{
    return this.http.get<Libro[]>("http://localhost:8081/getbooks");
  }

  searchBookByEditorial():Observable<Libro[]>{
    return this.http.get<Libro[]>("http://localhost:8081/getbyeditorial/{id}");
  }

}
