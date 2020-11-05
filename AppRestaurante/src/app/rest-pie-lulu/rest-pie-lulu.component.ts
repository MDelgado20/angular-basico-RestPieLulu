import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-pie-lulu',
  templateUrl: './rest-pie-lulu.component.html',
  styleUrls: ['./rest-pie-lulu.component.css']
})
export class RestPieLuluComponent implements OnInit {

  nombre; string;
  constructor() {
    this.nombre="Restaurante PieLulu";
   }

  ngOnInit(): void {
  }

}
