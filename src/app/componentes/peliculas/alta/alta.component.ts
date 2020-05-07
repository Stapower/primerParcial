import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataBaseConnectionService } from "../../../services/data-base-connection.service";


@Component({
	selector: 'app-alta',
	templateUrl: './alta.component.html',
	styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

	constructor(public databseConnection: DataBaseConnectionService) { }


	ngOnInit(): void {
	}
	asd: String;

	public pelicula = {
		"nombre": "",
		"tipo": "",
		"fechaDeEstreno": "",
		"publico": ""
	};

	public actor = {};

	peliculaActor = {
		peliculaId : "",
		actorId : "",
		pelicula: {},
		actor: {}
	};

	async alta() {
		console.log(this.pelicula);
		await this.databseConnection.saveEntity(DataBaseConnectionService.peliculas, this.pelicula, this.peliculaActor);
		console.log("id pelicula", this.peliculaActor);	
	}

	async asignarActor(event) {
		if (this.pelicula.nombre !== "") {
			console.log("asignarActor", event);
			this.actor = event;
			this.peliculaActor.actorId = event.id;
			this.peliculaActor.pelicula = this.pelicula;
			this.peliculaActor.actor = event;

			//await this.alta();
			var id = await this.databseConnection.saveEntity(DataBaseConnectionService.actoresYPeliculas, this.peliculaActor, null);
			console.log("id", id);
			//this.databseConnection.saveEntity(DataBaseConnectionService.peliculas, this.pelicula);
		}
	}

}
