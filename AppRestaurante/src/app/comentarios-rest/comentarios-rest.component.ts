import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ComentariosRest } from '../models/comentarios-rest.models';


@Component({
  selector: 'app-comentarios-rest',
  templateUrl: './comentarios-rest.component.html',
  styleUrls: ['./comentarios-rest.component.css']
})
export class ComentariosRestComponent implements OnInit {

  @Input() Comentarios: ComentariosRest;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() { }

  ngOnInit(): void {
  }

}
