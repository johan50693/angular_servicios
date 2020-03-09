import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Articulo } from '../models/articulo';
import { Usuario } from '../models/usuario';
import { ArticulosService } from '../services/articulos.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo>= new Array<Articulo>();
  constructor(private UsuarioInyectado: UsuarioService, private ArticuloInyectado: ArticulosService,
    private Ruta: Router) { 

  }

  ngOnInit() {
    this.ArticuloInyectado.leerNoticias().subscribe((articulosApi)=> {
      this.articulos= articulosApi;
    });

    let articuloEnviar: Articulo= new Articulo();
    articuloEnviar.body="Este es el cuerpo el articulo creado";
    articuloEnviar.title="Titulo de articulo creado";
    articuloEnviar.userId=1;
    this.ArticuloInyectado.guardarArticulo(articuloEnviar).subscribe((articuloCreado)=> {
      this.articulos.push(articuloCreado);
    })
  }

  irAlDetalle(articulo: Articulo){
    this.ArticuloInyectado.articulo=articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');
  }

}
