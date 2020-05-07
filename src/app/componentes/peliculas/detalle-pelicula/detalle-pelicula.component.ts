import { Component, OnInit, EventEmitter, Input,Output } from '@angular/core';
import { DataBaseConnectionService } from "../../../services/data-base-connection.service";

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input()  pelicula;
  @Input()  actor;

  @Output() borrarPelicula = new EventEmitter();

  //pelicula;
	constructor(public databseConnection: DataBaseConnectionService) { }

  ngOnInit(): void {
  }


  peliculaSeleccionada(event){
    //this.pelicula = event;
  }

  getActor(){

  }

  borrar(pelicula){
    console.log("borrar pelicula", pelicula);
    this.borrarPelicula.emit(pelicula);
    //this.pelicula = null;
  }

}
