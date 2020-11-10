import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-rest-pie-lulu',
  templateUrl: './menu-rest-pie-lulu.component.html',
  styleUrls: ['./menu-rest-pie-lulu.component.css']
})
export class MenuRestPieLuluComponent implements OnInit {

  menu: string[];
  constructor() {
    this.menu = ['Lasagna Gratinada de Pollo - 5.50', 'Hamburguesa con Papas - 4.50', 'Arroz con Leche - 1.25', 'Brownies con Helado - 2.35'];
   }

  ngOnInit(): void {
  }

}
