import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-rest-pie-lulu',
  templateUrl: './menu-rest-pie-lulu.component.html',
  styleUrls: ['./menu-rest-pie-lulu.component.css']
})
export class MenuRestPieLuluComponent implements OnInit {

  menu: string[];
  constructor() {
    this.menu = ['Lasagna Gratinada de Pollo', 'Hamburguesa con Papas', 'Arroz con Leche', 'Brownies con Helado'];
   }

  ngOnInit(): void {
  }

}
