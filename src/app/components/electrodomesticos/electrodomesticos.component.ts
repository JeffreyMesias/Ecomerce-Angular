import { Component,Input, OnInit } from '@angular/core';
import { Electrodomesticos } from '../../models/electrodomesticos.model';
@Component({
  selector: 'app-electrodomesticos',
  templateUrl: './electrodomesticos.component.html',
  styleUrl: './electrodomesticos.component.css'
})
export class ElectrodomesticosComponent implements OnInit {
  @Input() electrodomesticos: Electrodomesticos = {
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
      this.electrodomesticos.descripcion = descripcionGuardada;
    }
  }


  guardarDescripcion() {
    localStorage.setItem('descripcion', this.electrodomesticos.descripcion);
  }
}


