import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }


  searchAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8081/users");
  }

  //Activar o inactivar usuario

  //Agregar o modificar usuario

}
