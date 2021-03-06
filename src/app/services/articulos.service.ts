import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  articulo: Articulo= new Articulo();
  ruta: string= 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  leerNoticias():Observable<Articulo[]>{

    return this.http.get<Articulo[]>(`${this.ruta}/posts`);
  }

  leerUsuario(userId: number) :Observable<User>{

    return this.http.get<User>(`${this.ruta}/users/${userId}`);
  }

  guardarArticulo(articulo: Articulo) :Observable<Articulo> {
    return this.http.post<Articulo>(`${this.ruta}/posts`, articulo);
  }

}
