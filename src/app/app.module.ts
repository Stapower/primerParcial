import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AltaComponent } from './componentes/peliculas/alta/alta.component';
import { ListadoComponent } from './componentes/actor/listado/listado.component';
import { TablaPeliculaComponent } from './componentes/peliculas/tabla-pelicula/tabla-pelicula.component';
import {ListadoPeliculasComponent} from '../app/componentes/peliculas/listado/listado.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { DetallePeliculaComponent } from './componentes/peliculas/detalle-pelicula/detalle-pelicula.component';
import { TablaActorComponent } from './componentes/actor/tabla-actor/tabla-actor.component';
import { AltaActorComponent } from './componentes/actor/alta/alta.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import firebaseConfig from '../environments/environment';
import { DataBaseConnectionService } from "./services/data-base-connection.service";
//import { RuteandoModule } from './ruteando/ruteando.module';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListadoPaisesComponent } from './paises/listado-paises/listado-paises.component';
import { TablaPaisesComponent } from './paises/tabla-paises/tabla-paises.component';
import { HttpClientModule }    from '@angular/common/http';
import { DetallePaisComponent } from './paises/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './componentes/actor/detalle-actor/detalle-actor.component';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    AltaComponent,
    ListadoComponent,
    TablaPeliculaComponent,
    ListadoPeliculasComponent,
    BienvenidaComponent,
    DetallePeliculaComponent,
    TablaActorComponent,
    AltaActorComponent,
    ListadoPaisesComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
    DetalleActorComponent  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireAuthModule,
    //RouterModule.forRoot(MiRuteo),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataBaseConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
