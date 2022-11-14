import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: User[] = [];
  constructor(private userService:UsuariosService) { }

  ngOnInit(): void {
    this.userService.searchAllUsers().subscribe(
      (data:User[]) =>{
        this.users = data;
      }
    )
  }



}
