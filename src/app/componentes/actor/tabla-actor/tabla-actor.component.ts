import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Input()  actor;
  @Input()  actores;
  @Output() actorSeleccionado = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(actorSelect){
    this.actorSeleccionado.emit(actorSelect);
  }

}
