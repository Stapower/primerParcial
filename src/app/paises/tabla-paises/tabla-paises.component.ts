import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {


  @Input()  paises;
  @Output() paisSeleccionado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  seleccionar(pais){
    console.log("seleccionar" + pais.name);
    this.paisSeleccionado.emit(pais);
  }


}
