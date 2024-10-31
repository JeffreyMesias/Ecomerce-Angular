import { Component,Input, OnInit  } from '@angular/core';
import { muebles } from '../../models/muebles.model';

@Component({
  selector: 'app-muebles',
  templateUrl: './muebles.component.html',
  styleUrl: './muebles.component.css'
})
export class MueblesComponent implements OnInit{
  @Input() muebles: muebles = {
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
      this.muebles.descripcion = descripcionGuardada;
    }
  }


  guardarDescripcion() {
    localStorage.setItem('descripcion', this.muebles.descripcion);
  }
}
