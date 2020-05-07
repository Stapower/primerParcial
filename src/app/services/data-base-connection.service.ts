import { Actor } from './../classes/Actor';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import firebaseConfig from '../../environments/environment';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class DataBaseConnectionService {

	constructor(public afAuth: AngularFireAuth,private http: HttpClient,
		public afs: AngularFirestore,
		public afDatabase: AngularFireDatabase
		//private firebaseService: FirebaseService,
		//public afAuth: AngularFireAuth
	) { }

	Todo: {
		id: String;
		description: String;
		completed: Boolean;
	};

	static peliculas = "/peliculas";
	static actores = "/actores";

	static actoresYPeliculas = "/actoresYPeliculas";
	static url = "https://restcountries.eu/rest/v2/region/americas";
	static paises = new Array();

	getlist(url, returnObject){
	
		var serviceReturn = this.http.get(url).subscribe(data => {
			// Read the result field from the JSON response.get response
			for (let i = 0; ; i++) {

				if(data[i] != null){
					returnObject.push(data[i]);
					DataBaseConnectionService.paises.push(data[i])
				}else{
					break;
				}
				
			}
			console.log(data[0].name);
			returnObject.data;
		});

	}


	eliminarPais(pais){
		console.log(pais.name);
		DataBaseConnectionService.paises = DataBaseConnectionService.paises.filter(f => {return f.name!=pais.name});
		console.log(DataBaseConnectionService.paises[0].name);
		return DataBaseConnectionService.paises;
	}


	bringEntity(path, returnObject) {
		console.log("bringEntity");
		//var returnObject = new Array(); 


		var imageRef = this.afs.collection<any>(path);

		imageRef.snapshotChanges().forEach(snapshot => {
			var array = new Array();
			console.log("before snapshto foreach");
			returnObject.length = 0;
			var postData = snapshot.forEach(doc => {
				console.log("inside snapshto foreach");

				var postData = doc.payload.doc.data();
				console.log(doc.payload.doc.id, " => ", postData);
				postData.id = doc.payload.doc.id;
				returnObject.push(postData);
			})
			console.log("after snapshto foreach");

			//returnObject = array;
			console.log(returnObject);
			return returnObject;
		});

		/*await imageRef.get().then(function (querySnapshot) {
			console.log("querySnapshot", querySnapshot);
			console.log("path" + path);

			querySnapshot.forEach(function (doc) {
				var postData = doc.data();
				console.log(doc.id, " => ", postData);
				postData.id = doc.id;
				array.push(postData);

			});
		});
		*/
	}


	async deleteEntity(path, id) {
		console.log("bringEntity");
		var array = new Array();

		var imageRef = await this.afs.collection(path).ref;
		await imageRef.doc("/" + id).delete().then(succ => { console.log("deletion completed"); });

		/*await imageRef.get().then(function (querySnapshot) {
			console.log("querySnapshot", querySnapshot);
			console.log("path" + path);

			querySnapshot.forEach(function (doc) {
				var postData = doc.data();
				console.log(doc.id, " => ", postData);
				postData.id = doc.id;
				array.push(postData);

			});
		});

		return array;*/
	}


	async saveEntity(path, newObject, returnId) {
		this.afs.collection(path).add(newObject).then(
				(res) => {
					console.log("saveEntity", res);
					if(returnId != null)
						returnId.peliculaId = res.id;
				}
		);
	}
	//{"peliculaId" : this.pelicula.id}
	bringEntityByContainsId(path, peliculaId , returnObject){
		console.log("bringEntityByContainsIdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
		/*var imageRef2 = this.afs.collection<any>(path).get(keyValueJson).forEach(record => {
			console.log("record", record);

			record.docs.forEach(doc=> {
								console.log("doc", doc);
								returnObject = doc.data();
							})
			});*/

			var imageRef = this.afs.collection<any>(path);

			imageRef.snapshotChanges().forEach(snapshot => {
				var array = new Array();
				console.log("before snapshto foreach");

				var postData = snapshot.forEach(doc => {
					var postData = doc.payload.doc.data();
					console.log("postData", postData);

					if(postData.peliculaId == peliculaId){
						returnObject.nombre = postData.actor.nombre;
						returnObject.apellido = postData.actor.apellido;
						returnObject.id = postData.actorId;
						returnObject.foto = postData.actor.foto;
					}
				})
				console.log("after snapshto foreach");
	
				//returnObject = array;
				console.log(returnObject);
				return returnObject;
			});

		/*imageRef.snapshotChanges().forEach(snapshot => {
			var array = new Array();
			console.log("before snapshto foreach");
			var postData = snapshot.forEach(doc => {
				console.log("inside snapshto foreach");

				var postData = doc.payload.doc.data();
				console.log(doc.payload.doc.id, " => ", postData);
				postData.id = doc.payload.doc.id;
				returnObject.push(postData);
			})
			console.log("after snapshto foreach");

			//returnObject = array;
			console.log(returnObject);
			return returnObject;
		});*/
	}



}
