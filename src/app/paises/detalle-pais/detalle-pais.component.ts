import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input()  pais;
  @Output() deshabilitarPais = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  borrar(pais){
    console.log("borrar");
    this.deshabilitarPais.emit(pais);
  }

}
