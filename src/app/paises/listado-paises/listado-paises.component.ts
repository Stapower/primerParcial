import { Component, OnInit } from '@angular/core';
import { DataBaseConnectionService } from "../../services/data-base-connection.service";

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  constructor(public databseConnection: DataBaseConnectionService) { }

  paisSeleccionado;

  paises = DataBaseConnectionService.paises;
  array2 = new Array();


  ngOnInit(): void {
    this.databseConnection.getlist(DataBaseConnectionService.url, this.array2);
  }

  borrar(pais){
    this.databseConnection.eliminarPais(pais);
    this.paises = DataBaseConnectionService.paises;
    
    /*this.paises = this.paises.filter(p=> {
        return p.name != pais.name
      } 
      );*/
  }

  paisSeleccion(event){
    this.paisSeleccionado = event;
  }



}
