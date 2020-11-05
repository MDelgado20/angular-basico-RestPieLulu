import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-rest-pie-lulu',
  templateUrl: './menu-rest-pie-lulu.component.html',
  styleUrls: ['./menu-rest-pie-lulu.component.css']
})
export class MenuRestPieLuluComponent implements OnInit {

  menu: string[];
  constructor() {
    this.menu = ['Hamburguesa', 'Lasagna', 'Pollo Asado', 'Sancocho'];
   }

  ngOnInit(): void {
  }

}
