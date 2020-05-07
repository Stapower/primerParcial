import { Component, OnInit } from '@angular/core';
import { DataBaseConnectionService } from "../../../services/data-base-connection.service";

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaActorComponent implements OnInit {

  constructor(public databseConnection: DataBaseConnectionService) { }

  actor =  {
    "id": "",
    "nombre": "",
    "apellido": "",
    "fechaDeNacimiento": "",
    "sexo": "",
    "foto": "",
    "pais": ""
  }
actores
  paises = new Array();

  ngOnInit(): void {
    this.databseConnection.getlist(DataBaseConnectionService.url, this.paises);
  }

  crear(){
    console.log(this.actor.pais);
    var id;
    this.databseConnection.saveEntity(DataBaseConnectionService.actores, this.actor,null );

  }

}
