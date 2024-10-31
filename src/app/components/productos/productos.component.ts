import { Component, Input, OnInit } from '@angular/core';
import { Productos } from './../../../app/models/productos.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  @Input() productos: Productos = {
    title: '',
    price: 0,
    images: [],
    id: 0,
    descripcion: ''
  };

  constructor() { }

  
  ngOnInit() {
    this.cargarDescripcion(); 
  }

  cargarDescripcion() {
    const descripcionGuardada = localStorage.getItem('descripcion');
    if (descripcionGuardada) {
      this.productos.descripcion = descripcionGuardada;
    }
  }


  guardarDescripcion() {
    localStorage.setItem('descripcion', this.productos.descripcion);
  }
}


/*import { Component, Input,OnInit  } from '@angular/core';
import {Productos} from './../../../app/models/productos.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent{
  @Input() productos: Productos={
    title: '',
    price: 0,
    images:[],
    id:0,
    descripcion: ''
 };
 constructor() {
  this.cargarDescripcion();
}

// Función para cargar la descripción almacenada en localStorage
cargarDescripcion() {
  const descripcionGuardada = localStorage.getItem('descripcion');
  if (descripcionGuardada) {
    this.productos.descripcion = descripcionGuardada;
  }
}

// Función para guardar la descripción en localStorage
guardarDescripcion() {
  localStorage.setItem('descripcion', this.productos.descripcion);
}

}*/
