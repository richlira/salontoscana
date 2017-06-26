import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { RouterComponent } from './router/router.component';
import { SomosComponent } from './somos/somos.component';
import { FotosComponent } from './fotos/fotos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    RouterComponent,
    SomosComponent,
    FotosComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
