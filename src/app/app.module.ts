import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductosComponent } from './components/productos/productos.component';
import { ElectrodomesticosComponent } from './components/electrodomesticos/electrodomesticos.component';
import { MueblesComponent } from './components/muebles/muebles.component';
import { OtrosComponent } from './components/otros/otros.component';
import { SudaderasComponent } from './components/sudaderas/sudaderas.component';
import { CalsadoComponent } from './components/calsado/calsado.component';


import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    SudaderasComponent,
    ElectrodomesticosComponent,
    MueblesComponent,
    OtrosComponent,
    CalsadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
