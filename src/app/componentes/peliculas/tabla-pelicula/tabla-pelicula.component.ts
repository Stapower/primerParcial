import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input()  pelicula;
  @Input()  peliculas;
  @Output() peliculaSeleccionada = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(pelicula){
    console.log("seleccionar" + pelicula);
    this.peliculaSeleccionada.emit(pelicula);
  }

}
