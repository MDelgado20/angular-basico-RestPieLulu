import { Component, OnInit } from '@angular/core';
import { ComentariosRest } from '../models/comentarios-rest.models';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {

  Comentarios: ComentariosRest[];

  constructor() { 
    this.Comentarios = [];
  }

  ngOnInit(): void {
  }

  guardar(Usuario:string, Comentarios:string):boolean{
    //console.log(new ComentariosRest(Usuario, Comentarios));
    this.Comentarios.push(new ComentariosRest(Usuario,Comentarios));  
    //console.log(this.Comentarios);    

    //console.log(Usuario);
    //console.log(Comentarios);

    return false;
  }

}
