import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rest-pie-lulu',
  templateUrl: './rest-pie-lulu.component.html',
  styleUrls: ['./rest-pie-lulu.component.css']
})
export class RestPieLuluComponent implements OnInit {

  @Input() nombre: string;
  constructor() {  
  }

  ngOnInit(): void {
  }

}
