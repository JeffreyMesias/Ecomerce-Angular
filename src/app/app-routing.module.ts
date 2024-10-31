import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectrodomesticosComponent } from './components/electrodomesticos/electrodomesticos.component';
import { MueblesComponent } from './components/muebles/muebles.component';
import { OtrosComponent } from './components/otros/otros.component';
import { SudaderasComponent } from './components/sudaderas/sudaderas.component';
import { CalsadoComponent } from './components/calsado/calsado.component';

const routes: Routes = [
  {
    path:'electrodomesticos',
    component: ElectrodomesticosComponent
  },
  {
    path:'muebles',
    component: MueblesComponent
  },
  {
    path:'otros',
    component: OtrosComponent
  },
  {
    path:'sudaderas',
    component: SudaderasComponent
  },
  {
    path:'calsado',
    component: CalsadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
