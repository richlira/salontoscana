import { Routes, RouterModule } from "@angular/router";
import { RouterComponent } from "./router/router.component";
import { SomosComponent } from "./somos/somos.component";
import { FotosComponent } from "./fotos/fotos.component" ;
import { UbicacionComponent } from "./ubicacion/ubicacion.component";


const APP_ROUTES : Routes = [
  {path : '', component: RouterComponent},
  {path : 'somos', component: SomosComponent },
  {path : 'fotos', component: FotosComponent},
  {path : 'ubicacion', component: UbicacionComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
