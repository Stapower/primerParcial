import { Component, OnInit, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {
  @Input() actor;

  constructor() { }

  ngOnInit(): void {
    console.log("ACTORRRRRR", this.actor);
  }

}
