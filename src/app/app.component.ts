import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Productos } from './models/productos.model';
import { Router } from '@angular/router';
import { Calsado } from './models/calsado.model';
import { Electrodomesticos } from './models/electrodomesticos.model';
import { muebles } from './models/muebles.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'KM-MOTOR';
  http = inject(HttpClient);
  productos: Productos[] = [];
  calsado: Calsado[] = [];
  electrodomesticos: Electrodomesticos[] = [];
  muebles: muebles[] = [];

  ocultarProductos = true;
  divOculto = false;
  //1: sudaderas
  //2: electrodomesticos
  //3: muebles
  //4: calsados
  //5: otros

  ngOnInit() {
    this.http.get<Productos[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.productos = data;
      });

     
  }
  toggleDiv(event: Event, alias: string){
    console.log('ALIAS:',alias);
    event.preventDefault();
    if(this.ocultarProductos){
      this.ocultarProductos = false;
    }
    if(alias === 'calsado'){
      this.http.get<Calsado[]>('https://api.escuelajs.co/api/v1/categories/4/products')
      .subscribe((data) => {
        this.calsado = data;
      });
    } else if(alias === 'electrodomesticos'){
      this.http.get<Electrodomesticos[]>('https://api.escuelajs.co/api/v1/categories/2/products')
      .subscribe((data) => {
        console.log('DATA',data);
        this.electrodomesticos = data;
      });
    }
    else if(alias === 'muebles'){
      this.http.get<muebles[]>('https://api.escuelajs.co/api/v1/categories/3/products')
      .subscribe((data) => {
        this.muebles = data;
      });
    }
    
  }

  
  goToHome() {
    this.ocultarProductos = true; // Muestra el div nuevamente
    this.divOculto = false; // Restablece la variable de control
  }
}
