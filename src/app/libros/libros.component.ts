import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';
import { Libro } from '../model/Libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  books: Libro[]=[];
  constructor(private libroService:LibrosService) { }

  ngOnInit(): void {
    this.libroService.searchAllBooks().subscribe(
      (data:Libro[]) =>{
        this.books = data;
      })
  }

}
